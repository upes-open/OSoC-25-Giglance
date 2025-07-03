"use strict";
"use client";
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
exports.MarkdownModal = void 0;
const react_1 = __importDefault(require("react"));
const react_markdown_1 = __importDefault(require("react-markdown"));
const remark_gfm_1 = __importDefault(require("remark-gfm"));
const remark_toc_1 = __importDefault(require("remark-toc"));
const rehype_slug_1 = __importDefault(require("rehype-slug"));
const rehype_autolink_headings_1 = __importDefault(require("rehype-autolink-headings"));
const dialog_1 = require("@/components/ui/dialog");
const useMarkdownContent_1 = require("@/hooks/useMarkdownContent");
const lucide_react_1 = require("lucide-react");
function createSlug(text) {
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
const MarkdownModal = ({ isOpen, onClose, filename, title, }) => {
    const { content, loading, error } = (0, useMarkdownContent_1.useMarkdownContent)(filename);
    return (<dialog_1.Dialog open={isOpen} onOpenChange={onClose}>
      <dialog_1.DialogContent className="flex max-h-[95vh] max-w-[95vw] flex-col gap-0 overflow-hidden p-0 sm:max-h-[90vh] sm:max-w-[90vw] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        <dialog_1.DialogHeader className="border-border bg-muted/50 flex-shrink-0 border-b px-4 py-4 sm:px-6 sm:py-6">
          <dialog_1.DialogTitle className="text-foreground pr-8 text-xl font-semibold sm:text-2xl lg:text-3xl">
            {title}
          </dialog_1.DialogTitle>
        </dialog_1.DialogHeader>

        <div className="scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent min-h-0 flex-1 overflow-x-hidden overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
          {loading ? (<div className="flex items-center justify-center py-12 sm:py-16">
              <lucide_react_1.Loader2 className="text-muted-foreground h-6 w-6 animate-spin sm:h-8 sm:w-8"/>
              <span className="text-muted-foreground ml-3 text-sm font-medium sm:text-base">
                Loading {title.toLowerCase()}...
              </span>
            </div>) : error ? (<div className="py-12 text-center sm:py-16">
              <div className="bg-destructive/10 border-destructive/20 mx-auto max-w-md rounded-lg border p-4 sm:p-6">
                <p className="text-destructive mb-2 text-sm font-medium sm:text-base">
                  Error loading content
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {error}
                </p>
              </div>
            </div>) : (<div className="prose prose-sm sm:prose-base lg:prose-lg prose-neutral dark:prose-invert max-w-none pb-4">
              <react_markdown_1.default remarkPlugins={[remark_gfm_1.default, [remark_toc_1.default, { tight: true }]]} rehypePlugins={[
                rehype_slug_1.default,
                [
                    rehype_autolink_headings_1.default,
                    {
                        behavior: "wrap",
                        properties: {
                            className: ["anchor"],
                            ariaHidden: true,
                            tabIndex: -1,
                        },
                    },
                ],
            ]} components={{
                h1: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const id = createSlug(children);
                    return (<h1 id={id} className="text-foreground border-border mt-0 mb-6 border-b pb-3 text-2xl font-bold sm:mb-8 sm:pb-4 sm:text-3xl lg:text-4xl" {...props}>
                        {children}
                      </h1>);
                },
                h2: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const id = createSlug(children);
                    return (<h2 id={id} className="text-foreground border-border/50 mt-8 mb-4 border-b pb-2 text-xl font-semibold sm:mt-10 sm:mb-6 sm:pb-3 sm:text-2xl lg:text-3xl" {...props}>
                        {children}
                      </h2>);
                },
                h3: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const id = createSlug(children);
                    return (<h3 id={id} className="text-foreground mt-6 mb-3 text-lg font-semibold sm:mt-8 sm:mb-4 sm:text-xl lg:text-2xl" {...props}>
                        {children}
                      </h3>);
                },
                h4: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const id = createSlug(children);
                    return (<h4 id={id} className="text-foreground mt-6 mb-3 text-base font-medium sm:text-lg lg:text-xl" {...props}>
                        {children}
                      </h4>);
                },
                h5: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const id = createSlug(children);
                    return (<h5 id={id} className="text-foreground mt-4 mb-2 text-sm font-medium sm:text-base lg:text-lg" {...props}>
                        {children}
                      </h5>);
                },
                h6: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const id = createSlug(children);
                    return (<h6 id={id} className="text-muted-foreground mt-4 mb-2 text-xs font-medium tracking-wide uppercase sm:text-sm lg:text-base" {...props}>
                        {children}
                      </h6>);
                },
                p: (_a) => {
                    var props = __rest(_a, []);
                    return (<p className="text-foreground my-3 text-sm leading-relaxed sm:my-4 sm:text-base" {...props}/>);
                },
                a: (_a) => {
                    var props = __rest(_a, []);
                    return (<a className="text-primary hover:text-primary/80 hover:decoration-primary/60 font-medium break-words underline decoration-2 underline-offset-4 transition-colors" {...props}/>);
                },
                ul: (_a) => {
                    var props = __rest(_a, []);
                    return (<ul className="marker:text-muted-foreground my-3 list-disc space-y-2 pl-5 sm:my-4 sm:pl-6" {...props}/>);
                },
                ol: (_a) => {
                    var props = __rest(_a, []);
                    return (<ol className="marker:text-muted-foreground my-3 list-decimal space-y-2 pl-5 marker:font-medium sm:my-4 sm:pl-6" {...props}/>);
                },
                li: (_a) => {
                    var props = __rest(_a, []);
                    return (<li className="text-foreground text-sm leading-relaxed sm:text-base" {...props}/>);
                },
                blockquote: (_a) => {
                    var props = __rest(_a, []);
                    return (<blockquote className="border-primary/30 bg-muted/50 text-muted-foreground my-4 rounded-r-lg border-l-4 py-3 pr-4 pl-4 text-sm italic sm:my-6 sm:py-4 sm:pl-6 sm:text-base" {...props}/>);
                },
                code: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    const inline = "inline" in props && props.inline;
                    return inline ? (<code className="bg-muted/80 border-border text-foreground rounded-md border px-1.5 py-0.5 font-mono text-xs font-medium sm:px-2 sm:py-1 sm:text-sm" {...props}>
                        {children}
                      </code>) : (<code className="bg-muted border-border text-foreground block overflow-x-auto rounded-lg border p-3 font-mono text-xs sm:p-4 sm:text-sm" {...props}>
                        {children}
                      </code>);
                },
                pre: (_a) => {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    return (<pre className="bg-muted border-border my-4 overflow-x-auto rounded-lg border p-3 font-mono text-xs sm:my-6 sm:p-4 sm:text-sm" {...props}>
                      {children}
                    </pre>);
                },
                table: (_a) => {
                    var props = __rest(_a, []);
                    return (<div className="border-border my-4 overflow-x-auto rounded-lg border sm:my-6">
                      <table className="min-w-full border-collapse text-xs sm:text-sm" {...props}/>
                    </div>);
                },
                th: (_a) => {
                    var props = __rest(_a, []);
                    return (<th className="bg-muted border-border text-foreground border-b px-3 py-2 text-left text-xs font-semibold sm:px-4 sm:py-3 sm:text-sm" {...props}/>);
                },
                td: (_a) => {
                    var props = __rest(_a, []);
                    return (<td className="border-border/50 text-foreground border-b px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm" {...props}/>);
                },
                hr: (_a) => {
                    var props = __rest(_a, []);
                    return (<hr className="border-border my-6 sm:my-8" {...props}/>);
                },
                strong: (_a) => {
                    var props = __rest(_a, []);
                    return (<strong className="text-foreground font-semibold" {...props}/>);
                },
                em: (_a) => {
                    var props = __rest(_a, []);
                    return (<em className="text-foreground italic" {...props}/>);
                },
            }}>
                {content}
              </react_markdown_1.default>
            </div>)}
        </div>
      </dialog_1.DialogContent>
    </dialog_1.Dialog>);
};
exports.MarkdownModal = MarkdownModal;
