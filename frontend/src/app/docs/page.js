"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Docs;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const react_markdown_1 = __importDefault(require("react-markdown"));
const remark_gfm_1 = __importDefault(require("remark-gfm"));
const remark_toc_1 = __importDefault(require("remark-toc"));
const rehype_slug_1 = __importDefault(require("rehype-slug"));
const rehype_autolink_headings_1 = __importDefault(require("rehype-autolink-headings"));
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const lucide_react_1 = require("lucide-react");
const codeblock_1 = require("@/components/ui/codeblock");
function createSlug(text) {
    if (Array.isArray(text)) {
        return text.join('').toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    }
    if (typeof text === 'string') {
        return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    }
    return '';
}
function getDocumentContent(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const filePath = path_1.default.join(process.cwd(), filename);
            const content = yield promises_1.default.readFile(filePath, 'utf8');
            return content;
        }
        catch (error) {
            console.error(`Error reading ${filename}:`, error);
            return `# Error loading ${filename}

Sorry, there was an error loading the ${filename} file.

## Common Issues

- Ensure the ${filename} file exists in the project root
- Check file permissions
- Make sure the path is correct`;
        }
    });
}
function getAllDocuments() {
    return __awaiter(this, void 0, void 0, function* () {
        const documents = [
            { id: 'about', title: 'About the Project', filename: 'README.md' },
            { id: 'contributing', title: 'Contribution Guide', filename: '../.github/CONTRIBUTING.md' },
            { id: 'conduct', title: 'Code of Conduct', filename: '../.github/CODE_OF_CONDUCT.md' },
        ];
        const sections = [];
        for (const doc of documents) {
            const content = yield getDocumentContent(doc.filename);
            sections.push({
                id: doc.id,
                title: doc.title,
                content: content,
            });
        }
        return sections;
    });
}
function Docs(props) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        const documents = yield getAllDocuments();
        const searchparams = yield props.searchParams;
        const currentSection = (_a = searchparams.section) !== null && _a !== void 0 ? _a : 'about';
        const currentDocument = (_b = documents.find(doc => doc.id === currentSection)) !== null && _b !== void 0 ? _b : documents[0];
        return (<div className="min-h-screen bg-transparent">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-border bg-card/50 backdrop-blur-sm sticky top-0 h-screen overflow-y-auto">
          <div className="p-6">
            <h2 className="font-bold text-xl mb-6 text-foreground">Documentation</h2>

            {/* Document Navigation */}
            <nav className="space-y-2">
              {documents.map((doc) => (<link_1.default key={doc.id} href={`/docs?section=${doc.id}`} className={`
                    block px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${currentSection === doc.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'}
                  `}>
                  {doc.title}
                </link_1.default>))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex">
          <div className='hidden lg:block p-10'>
            <link_1.default href="/">
              <lucide_react_1.ArrowLeft className="inline-block mb-4 text-muted-foreground hover:text-foreground transition-colors"/>
            </link_1.default>
          </div>
          <div className='flex-1 p-8 max-w-4xl mx-auto'>
            <div className="lg:hidden flex-col mb-8">
              <link_1.default href="/" className='flex gap-5 w-fit'>
                <lucide_react_1.ArrowLeft className="inline-block mb-4 text-muted-foreground hover:text-foreground transition-colors"/>
                <span className="text-lg mb-4 text-gray-600">Back to Home</span>
              </link_1.default>
              <div className="flex flex-wrap gap-2">
                {documents.map((doc) => (<link_1.default key={doc.id} href={`/docs?section=${doc.id}`} className={`
                      px-4 py-2 rounded-lg text-sm font-medium transition-colors border
                      ${currentSection === doc.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:bg-accent border-border'}
                    `}>
                    {doc.title}
                  </link_1.default>))}
              </div>
            </div>
            <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20">
              <react_markdown_1.default remarkPlugins={[remark_gfm_1.default, [remark_toc_1.default, { tight: true }]]} rehypePlugins={[
                rehype_slug_1.default,
                [rehype_autolink_headings_1.default, {
                        behavior: 'wrap',
                        properties: {
                            className: ['anchor'],
                            ariaHidden: true,
                            tabIndex: -1
                        }
                    }]
            ]} components={{
                h1: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const id = createSlug(children);
                    return <h1 id={id} className="text-4xl font-bold mb-8 mt-2 text-foreground" {...props}>{children}</h1>;
                },
                h2: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const id = createSlug(children);
                    return <h2 id={id} className="text-3xl font-bold mt-12 mb-4 border-b pb-2 border-border text-foreground" {...props}>{children}</h2>;
                },
                h3: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const id = createSlug(children);
                    return <h3 id={id} className="text-2xl font-semibold mt-8 mb-3 text-foreground" {...props}>{children}</h3>;
                },
                h4: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const id = createSlug(children);
                    return <h4 id={id} className="text-xl font-medium mt-6 mb-2 text-foreground" {...props}>{children}</h4>;
                },
                pre: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    return <codeblock_1.CodeBlock {...props}>{children}</codeblock_1.CodeBlock>;
                },
                code: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const inline = 'inline' in props && props.inline;
                    return inline
                        ? <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono border border-border" {...props}>{children}</code>
                        : <code className="block" {...props}>{children}</code>;
                },
                a: (_a) => {
                    var props = __rest(_a, []);
                    return <a className="text-primary hover:text-primary/80 underline-offset-2" {...props}/>;
                },
                ul: (_a) => {
                    var props = __rest(_a, []);
                    return <ul className="list-disc pl-6 my-4" {...props}/>;
                },
                ol: (_a) => {
                    var props = __rest(_a, []);
                    return <ol className="list-decimal pl-6 my-4" {...props}/>;
                },
                li: (_a) => {
                    var props = __rest(_a, []);
                    return <li className="my-1" {...props}/>;
                },
                p: (_a) => {
                    var props = __rest(_a, []);
                    return <p className="my-4 leading-relaxed text-foreground" {...props}/>;
                },
                blockquote: (_a) => {
                    var props = __rest(_a, []);
                    return <blockquote className="border-l-4 border-border pl-4 italic my-4 text-muted-foreground" {...props}/>;
                },
                table: (_a) => {
                    var props = __rest(_a, []);
                    return <div className="overflow-x-auto my-6"><table className="min-w-full border-collapse border border-border" {...props}/></div>;
                },
                th: (_a) => {
                    var props = __rest(_a, []);
                    return <th className="px-4 py-2 bg-muted font-medium border border-border text-left" {...props}/>;
                },
                td: (_a) => {
                    var props = __rest(_a, []);
                    return <td className="px-4 py-2 border border-border" {...props}/>;
                },
                img: ({ alt, src }) => {
                    if (typeof src === 'string') {
                        return (<image_1.default src={src} alt={alt || 'image'} width={800} height={400} className="rounded-lg max-w-full h-auto"/>);
                    }
                    // Fallback for non-string src (shouldn't happen in markdown)
                    return <span className="text-muted-foreground">Image could not be loaded</span>;
                },
            }}>
                {(_c = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.content) !== null && _c !== void 0 ? _c : ''}
              </react_markdown_1.default>
            </article>
          </div>
        </main>
      </div>
    </div>);
    });
}
