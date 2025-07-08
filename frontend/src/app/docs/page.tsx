import fs from "fs/promises";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/ui/codeblock";

type DocumentSection = {
  id: string;
  title: string;
  content: string;
};

function createSlug(text: unknown): string {
  if (Array.isArray(text)) {
    return text
      .join("")
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }
  if (typeof text === "string") {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }
  return "";
}

async function getDocumentContent(filename: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), filename);
    const content = await fs.readFile(filePath, "utf8");
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
    { id: "about", title: "About the Project", filename: "README.md" },
    {
      id: "contributing",
      title: "Contribution Guide",
      filename: "../.github/CONTRIBUTING.md",
    },
    {
      id: "conduct",
      title: "Code of Conduct",
      filename: "../.github/CODE_OF_CONDUCT.md",
    },
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

export default async function Docs(props: { searchParams: SearchParams }) {
  const documents = await getAllDocuments();
  const searchparams = await props.searchParams;
  const currentSection = searchparams.section ?? "about";
  const currentDocument =
    documents.find((doc) => doc.id === currentSection) ?? documents[0];

  return (
    <div className="min-h-screen bg-transparent">
      <div className="flex">
        {/* Sidebar */}
        <aside className="border-border bg-card/50 sticky top-0 hidden h-screen w-64 overflow-y-auto border-r backdrop-blur-sm lg:block">
          <div className="p-6">
            <h2 className="text-foreground mb-6 text-xl font-bold">
              Documentation
            </h2>

            {/* Document Navigation */}
            <nav className="space-y-2">
              {documents.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/docs?section=${doc.id}`}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    currentSection === doc.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  } `}
                >
                  {doc.title}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex">
          <div className="hidden p-10 lg:block">
            <Link href="/">
              <ArrowLeft className="text-muted-foreground hover:text-foreground mb-4 inline-block transition-colors" />
            </Link>
          </div>
          <div className="mx-auto max-w-4xl flex-1 p-8">
            <div className="mb-8 flex-col lg:hidden">
              <Link href="/" className="flex w-fit gap-5">
                <ArrowLeft className="text-muted-foreground hover:text-foreground mb-4 inline-block transition-colors" />
                <span className="mb-4 text-lg text-gray-600">Back to Home</span>
              </Link>
              <div className="flex flex-wrap gap-2">
                {documents.map((doc) => (
                  <Link
                    key={doc.id}
                    href={`/docs?section=${doc.id}`}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                      currentSection === doc.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-muted-foreground hover:text-foreground hover:bg-accent border-border"
                    } `}
                  >
                    {doc.title}
                  </Link>
                ))}
              </div>
            </div>
            <article className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-20 max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, [remarkToc, { tight: true }]]}
                rehypePlugins={[
                  rehypeSlug,
                  [
                    rehypeAutolinkHeadings,
                    {
                      behavior: "wrap",
                      properties: {
                        className: ["anchor"],
                        ariaHidden: true,
                        tabIndex: -1,
                      },
                    },
                  ],
                ]}
                components={{
                  h1: ({ children, ...props }) => {
                    const id = createSlug(children);
                    return (
                      <h1
                        id={id}
                        className="text-foreground mt-2 mb-8 text-4xl font-bold"
                        {...props}
                      >
                        {children}
                      </h1>
                    );
                  },
                  h2: ({ children, ...props }) => {
                    const id = createSlug(children);
                    return (
                      <h2
                        id={id}
                        className="border-border text-foreground mt-12 mb-4 border-b pb-2 text-3xl font-bold"
                        {...props}
                      >
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children, ...props }) => {
                    const id = createSlug(children);
                    return (
                      <h3
                        id={id}
                        className="text-foreground mt-8 mb-3 text-2xl font-semibold"
                        {...props}
                      >
                        {children}
                      </h3>
                    );
                  },
                  h4: ({ children, ...props }) => {
                    const id = createSlug(children);
                    return (
                      <h4
                        id={id}
                        className="text-foreground mt-6 mb-2 text-xl font-medium"
                        {...props}
                      >
                        {children}
                      </h4>
                    );
                  },
                  pre: ({ children, ...props }) => (
                    <CodeBlock {...props}>{children}</CodeBlock>
                  ),
                  code: ({ children, ...props }) => {
                    const inline = "inline" in props && props.inline;
                    return inline ? (
                      <code
                        className="bg-muted border-border rounded border px-1.5 py-0.5 font-mono text-sm"
                        {...props}
                      >
                        {children}
                      </code>
                    ) : (
                      <code className="block" {...props}>
                        {children}
                      </code>
                    );
                  },
                  a: ({ ...props }) => (
                    <a
                      className="text-primary hover:text-primary/80 underline-offset-2"
                      {...props}
                    />
                  ),
                  ul: ({ ...props }) => (
                    <ul className="my-4 list-disc pl-6" {...props} />
                  ),
                  ol: ({ ...props }) => (
                    <ol className="my-4 list-decimal pl-6" {...props} />
                  ),
                  li: ({ ...props }) => <li className="my-1" {...props} />,
                  p: ({ ...props }) => (
                    <p
                      className="text-foreground my-4 leading-relaxed"
                      {...props}
                    />
                  ),
                  blockquote: ({ ...props }) => (
                    <blockquote
                      className="border-border text-muted-foreground my-4 border-l-4 pl-4 italic"
                      {...props}
                    />
                  ),
                  table: ({ ...props }) => (
                    <div className="my-6 overflow-x-auto">
                      <table
                        className="border-border min-w-full border-collapse border"
                        {...props}
                      />
                    </div>
                  ),
                  th: ({ ...props }) => (
                    <th
                      className="bg-muted border-border border px-4 py-2 text-left font-medium"
                      {...props}
                    />
                  ),
                  td: ({ ...props }) => (
                    <td className="border-border border px-4 py-2" {...props} />
                  ),
                  img: ({ alt, src }) => {
                    if (typeof src === "string") {
                      return (
                        <Image
                          src={src}
                          alt={alt! || "image"}
                          width={800}
                          height={400}
                          className="h-auto max-w-full rounded-lg"
                        />
                      );
                    }
                    // Fallback for non-string src (shouldn't happen in markdown)
                    return (
                      <span className="text-muted-foreground">
                        Image could not be loaded
                      </span>
                    );
                  },
                }}
              >
                {currentDocument?.content ?? ""}
              </ReactMarkdown>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
