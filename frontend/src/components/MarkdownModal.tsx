"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMarkdownContent } from "@/hooks/useMarkdownContent";
import { Loader2 } from "lucide-react";

interface MarkdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  filename: string;
  title: string;
}

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

export const MarkdownModal: React.FC<MarkdownModalProps> = ({
  isOpen,
  onClose,
  filename,
  title,
}) => {
  const { content, loading, error } = useMarkdownContent(filename);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex max-h-[95vh] max-w-[95vw] flex-col gap-0 overflow-hidden p-0 sm:max-h-[90vh] sm:max-w-[90vw] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        <DialogHeader className="border-border bg-muted/50 flex-shrink-0 border-b px-4 py-4 sm:px-6 sm:py-6">
          <DialogTitle className="text-foreground pr-8 text-xl font-semibold sm:text-2xl lg:text-3xl">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent min-h-0 flex-1 overflow-x-hidden overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
          {loading ? (
            <div className="flex items-center justify-center py-12 sm:py-16">
              <Loader2 className="text-muted-foreground h-6 w-6 animate-spin sm:h-8 sm:w-8" />
              <span className="text-muted-foreground ml-3 text-sm font-medium sm:text-base">
                Loading {title.toLowerCase()}...
              </span>
            </div>
          ) : error ? (
            <div className="py-12 text-center sm:py-16">
              <div className="bg-destructive/10 border-destructive/20 mx-auto max-w-md rounded-lg border p-4 sm:p-6">
                <p className="text-destructive mb-2 text-sm font-medium sm:text-base">
                  Error loading content
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {error}
                </p>
              </div>
            </div>
          ) : (
            <div className="prose prose-sm sm:prose-base lg:prose-lg prose-neutral dark:prose-invert max-w-none pb-4">
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
                        className="text-foreground border-border mt-0 mb-6 border-b pb-3 text-2xl font-bold sm:mb-8 sm:pb-4 sm:text-3xl lg:text-4xl"
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
                        className="text-foreground border-border/50 mt-8 mb-4 border-b pb-2 text-xl font-semibold sm:mt-10 sm:mb-6 sm:pb-3 sm:text-2xl lg:text-3xl"
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
                        className="text-foreground mt-6 mb-3 text-lg font-semibold sm:mt-8 sm:mb-4 sm:text-xl lg:text-2xl"
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
                        className="text-foreground mt-6 mb-3 text-base font-medium sm:text-lg lg:text-xl"
                        {...props}
                      >
                        {children}
                      </h4>
                    );
                  },
                  h5: ({ children, ...props }) => {
                    const id = createSlug(children);
                    return (
                      <h5
                        id={id}
                        className="text-foreground mt-4 mb-2 text-sm font-medium sm:text-base lg:text-lg"
                        {...props}
                      >
                        {children}
                      </h5>
                    );
                  },
                  h6: ({ children, ...props }) => {
                    const id = createSlug(children);
                    return (
                      <h6
                        id={id}
                        className="text-muted-foreground mt-4 mb-2 text-xs font-medium tracking-wide uppercase sm:text-sm lg:text-base"
                        {...props}
                      >
                        {children}
                      </h6>
                    );
                  },
                  p: ({ ...props }) => (
                    <p
                      className="text-foreground my-3 text-sm leading-relaxed sm:my-4 sm:text-base"
                      {...props}
                    />
                  ),
                  a: ({ ...props }) => (
                    <a
                      className="text-primary hover:text-primary/80 hover:decoration-primary/60 font-medium break-words underline decoration-2 underline-offset-4 transition-colors"
                      {...props}
                    />
                  ),
                  ul: ({ ...props }) => (
                    <ul
                      className="marker:text-muted-foreground my-3 list-disc space-y-2 pl-5 sm:my-4 sm:pl-6"
                      {...props}
                    />
                  ),
                  ol: ({ ...props }) => (
                    <ol
                      className="marker:text-muted-foreground my-3 list-decimal space-y-2 pl-5 marker:font-medium sm:my-4 sm:pl-6"
                      {...props}
                    />
                  ),
                  li: ({ ...props }) => (
                    <li
                      className="text-foreground text-sm leading-relaxed sm:text-base"
                      {...props}
                    />
                  ),
                  blockquote: ({ ...props }) => (
                    <blockquote
                      className="border-primary/30 bg-muted/50 text-muted-foreground my-4 rounded-r-lg border-l-4 py-3 pr-4 pl-4 text-sm italic sm:my-6 sm:py-4 sm:pl-6 sm:text-base"
                      {...props}
                    />
                  ),
                  code: ({ children, ...props }) => {
                    const inline = "inline" in props && props.inline;
                    return inline ? (
                      <code
                        className="bg-muted/80 border-border text-foreground rounded-md border px-1.5 py-0.5 font-mono text-xs font-medium sm:px-2 sm:py-1 sm:text-sm"
                        {...props}
                      >
                        {children}
                      </code>
                    ) : (
                      <code
                        className="bg-muted border-border text-foreground block overflow-x-auto rounded-lg border p-3 font-mono text-xs sm:p-4 sm:text-sm"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children, ...props }) => (
                    <pre
                      className="bg-muted border-border my-4 overflow-x-auto rounded-lg border p-3 font-mono text-xs sm:my-6 sm:p-4 sm:text-sm"
                      {...props}
                    >
                      {children}
                    </pre>
                  ),
                  table: ({ ...props }) => (
                    <div className="border-border my-4 overflow-x-auto rounded-lg border sm:my-6">
                      <table
                        className="min-w-full border-collapse text-xs sm:text-sm"
                        {...props}
                      />
                    </div>
                  ),
                  th: ({ ...props }) => (
                    <th
                      className="bg-muted border-border text-foreground border-b px-3 py-2 text-left text-xs font-semibold sm:px-4 sm:py-3 sm:text-sm"
                      {...props}
                    />
                  ),
                  td: ({ ...props }) => (
                    <td
                      className="border-border/50 text-foreground border-b px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm"
                      {...props}
                    />
                  ),
                  hr: ({ ...props }) => (
                    <hr className="border-border my-6 sm:my-8" {...props} />
                  ),
                  strong: ({ ...props }) => (
                    <strong
                      className="text-foreground font-semibold"
                      {...props}
                    />
                  ),
                  em: ({ ...props }) => (
                    <em className="text-foreground italic" {...props} />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
