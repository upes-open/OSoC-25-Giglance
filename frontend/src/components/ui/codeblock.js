"use strict";
'use client';
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeBlock = CodeBlock;
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
function CodeBlock(_a) {
    var { children, className: _className } = _a, props = __rest(_a, ["children", "className"]);
    const [copied, setCopied] = (0, react_1.useState)(false);
    const preRef = (0, react_1.useRef)(null);
    const handleCopy = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (preRef.current) {
            const codeElement = preRef.current.querySelector('code');
            if (codeElement) {
                const text = (_a = codeElement.textContent) !== null && _a !== void 0 ? _a : '';
                try {
                    yield navigator.clipboard.writeText(text);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                }
                catch (err) {
                    console.error('Failed to copy code:', err);
                }
            }
        }
    });
    return (<div className="relative group">
      <pre ref={preRef} className="p-4 rounded-lg overflow-x-auto text-sm my-4 bg-muted border border-border" {...props}>
        {children}
      </pre>
      <button onClick={handleCopy} className="absolute top-2 right-2 p-2 rounded-md bg-background/80 border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent" title={copied ? 'Copied!' : 'Copy code'}>
        {copied ? (<lucide_react_1.Check className="h-4 w-4 text-green-500"/>) : (<lucide_react_1.Copy className="h-4 w-4 text-muted-foreground"/>)}
      </button>
    </div>);
}
