import fs from 'fs/promises';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CodeBlock } from '@/components/ui/codeblock';

type DocumentSection = {
  id: string;
  title: string;
  content: string;
};

function createSlug(text: unknown): string {
  if (Array.isArray(text)) {
    return text.join('').toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
  }
  if (typeof text === 'string') {
    return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
  }
  return '';
}

async function getDocumentContent(filename: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), filename);
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return `# Error loading ${filename}

Sorry, there was an error loading the ${filename} file.

## Common Issues

- Ensure the ${filename} file exists in the project root
- Check file permissions
- Make sure the path is correct`;
  }
}

async function getAllDocuments(): Promise<DocumentSection[]> {
  const documents = [
    { id: 'about', title: 'About the Project', filename: 'README.md' },
    { id: 'contributing', title: 'Contribution Guide', filename: '../.github/CONTRIBUTING.md' },
    { id: 'conduct', title: 'Code of Conduct', filename: '../.github/CODE_OF_CONDUCT.md' },
  ];

  const sections: DocumentSection[] = [];

  for (const doc of documents) {
    const content = await getDocumentContent(doc.filename);
    sections.push({
      id: doc.id,
      title: doc.title,
      content: content,
    });
  }

  return sections;
}

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function Docs(props: {
  searchParams: SearchParams;
}) {
  const documents = await getAllDocuments();
  const searchparams = await props.searchParams;
  const currentSection = searchparams.section ?? 'about';
  const currentDocument = documents.find(doc => doc.id === currentSection) ?? documents[0];

  return (
    <div className="min-h-screen bg-transparent">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-border bg-card/50 backdrop-blur-sm sticky top-0 h-screen overflow-y-auto">
          <div className="p-6">
            <h2 className="font-bold text-xl mb-6 text-foreground">Documentation</h2>

            {/* Document Navigation */}
            <nav className="space-y-2">
              {documents.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/docs?section=${doc.id}`}
                  className={`
                    block px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${currentSection === doc.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }
                  `}
                >
                  {doc.title}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex">
          <div className='hidden lg:block p-10'>
            <Link href="/">
              <ArrowLeft className="inline-block mb-4 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
          <div className='flex-1 p-8 max-w-4xl mx-auto'>
            <div className="lg:hidden flex-col mb-8">
              <Link href="/" className='flex gap-5 w-fit'>
                <ArrowLeft className="inline-block mb-4 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="text-lg mb-4 text-gray-600">Back to Home</span>
              </Link>
              <div className="flex flex-wrap gap-2">
                {documents.map((doc) => (
                  <Link
                    key={doc.id}
                    href={`/docs?section=${doc.id}`}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium transition-colors border
                      ${currentSection === doc.id
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-card text-muted-foreground hover:text-foreground hover:bg-accent border-border'
                      }
                    `}
                  >
                    {doc.title}
                  </Link>
                ))}
              </div>
            </div>
            <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, [remarkToc, { tight: true }]]}
                rehypePlugins={[
                  rehypeSlug,
                  [rehypeAutolinkHeadings, {
                    behavior: 'wrap',
                    properties: {
                      className: ['anchor'],
                      ariaHidden: true,
                      tabIndex: -1
                    }
                  }]
                ]}
                components={{
                  h1: ({ children, ...props }) => {
                    const id = createSlug(children);
                    return <h1 id={id} className="text-4xl font-bold mb-8 mt-2 text-foreground" {...props}>{children}</h1>;
                  },
                  h2: ({ children, ...props }) => {
                    const id = createSlug(children);
                    return <h2 id={id} className="text-3xl font-bold mt-12 mb-4 border-b pb-2 border-border text-foreground" {...props}>{children}</h2>;
                  },
                  h3: ({ children, ...props }) => {
                    const id = createSlug(children);
                    return <h3 id={id} className="text-2xl font-semibold mt-8 mb-3 text-foreground" {...props}>{children}</h3>;
                  },
                  h4: ({ children, ...props }) => {
                    const id = createSlug(children);
                    return <h4 id={id} className="text-xl font-medium mt-6 mb-2 text-foreground" {...props}>{children}</h4>;
                  },
                  pre: ({ children, ...props }) => <CodeBlock {...props}>{children}</CodeBlock>,
                  code: ({ children, ...props }) => {
                    const inline = 'inline' in props && props.inline;
                    return inline
                      ? <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono border border-border" {...props}>{children}</code>
                      : <code className="block" {...props}>{children}</code>;
                  },
                  a: ({ ...props }) => <a className="text-primary hover:text-primary/80 underline-offset-2" {...props} />,
                  ul: ({ ...props }) => <ul className="list-disc pl-6 my-4" {...props} />,
                  ol: ({ ...props }) => <ol className="list-decimal pl-6 my-4" {...props} />,
                  li: ({ ...props }) => <li className="my-1" {...props} />,
                  p: ({ ...props }) => <p className="my-4 leading-relaxed text-foreground" {...props} />,
                  blockquote: ({ ...props }) => <blockquote className="border-l-4 border-border pl-4 italic my-4 text-muted-foreground" {...props} />,
                  table: ({ ...props }) => <div className="overflow-x-auto my-6"><table className="min-w-full border-collapse border border-border" {...props} /></div>,
                  th: ({ ...props }) => <th className="px-4 py-2 bg-muted font-medium border border-border text-left" {...props} />,
                  td: ({ ...props }) => <td className="px-4 py-2 border border-border" {...props} />,
                  img: ({ alt, src }) => {
                    if (typeof src === 'string') {
                      return (
                        <Image
                          src={src}
                          alt={alt! || 'image'}
                          width={800}
                          height={400}
                          className="rounded-lg max-w-full h-auto"
                        />
                      );
                    }
                    // Fallback for non-string src (shouldn't happen in markdown)
                    return <span className="text-muted-foreground">Image could not be loaded</span>;
                  },
                }}
              >
                {currentDocument?.content ?? ''}
              </ReactMarkdown>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}