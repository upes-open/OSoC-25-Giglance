"use client";

import { useState, useEffect } from "react";

export interface MarkdownContent {
  content: string;
  loading: boolean;
  error: string | null;
}

export function useMarkdownContent(filename: string): MarkdownContent {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMarkdown() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/markdown/${encodeURIComponent(filename)}`,
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch ${filename}: ${response.statusText}`,
          );
        }

        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
        setContent(`# Error loading ${filename}

Sorry, there was an error loading the ${filename} file.

## Common Issues

- Ensure the ${filename} file exists in the project root
- Check file permissions
- Make sure the path is correct`);
      } finally {
        setLoading(false);
      }
    }

    if (filename) {
      void fetchMarkdown();
    }
  }, [filename]);

  return { content, loading, error };
}
