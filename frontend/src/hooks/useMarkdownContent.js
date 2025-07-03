"use strict";
"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMarkdownContent = useMarkdownContent;
const react_1 = require("react");
function useMarkdownContent(filename) {
    const [content, setContent] = (0, react_1.useState)("");
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        function fetchMarkdown() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    setLoading(true);
                    setError(null);
                    const response = yield fetch(`/api/markdown?file=${encodeURIComponent(filename)}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${filename}: ${response.statusText}`);
                    }
                    const text = yield response.text();
                    setContent(text);
                }
                catch (err) {
                    setError(err instanceof Error ? err.message : "Unknown error occurred");
                    setContent(`# Error loading ${filename}

Sorry, there was an error loading the ${filename} file.

## Common Issues

- Ensure the ${filename} file exists in the project root
- Check file permissions
- Make sure the path is correct`);
                }
                finally {
                    setLoading(false);
                }
            });
        }
        if (filename) {
            void fetchMarkdown();
        }
    }, [filename]);
    return { content, loading, error };
}
