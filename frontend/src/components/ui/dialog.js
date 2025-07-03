"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
const React = __importStar(require("react"));
const DialogPrimitive = __importStar(require("@radix-ui/react-dialog"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("@/lib/utils");
function Dialog(_a) {
    var props = __rest(_a, []);
    return <DialogPrimitive.Root data-slot="dialog" {...props}/>;
}
function DialogTrigger(_a) {
    var props = __rest(_a, []);
    return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props}/>;
}
function DialogPortal(_a) {
    var props = __rest(_a, []);
    return <DialogPrimitive.Portal data-slot="dialog-portal" {...props}/>;
}
function DialogClose(_a) {
    var props = __rest(_a, []);
    return <DialogPrimitive.Close data-slot="dialog-close" {...props}/>;
}
function DialogOverlay(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<DialogPrimitive.Overlay data-slot="dialog-overlay" className={(0, utils_1.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className)} {...props}/>);
}
function DialogContent(_a) {
    var { className, children, showCloseButton = true } = _a, props = __rest(_a, ["className", "children", "showCloseButton"]);
    return (<DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content data-slot="dialog-content" className={(0, utils_1.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className)} {...props}>
        {children}
        {showCloseButton && (<DialogPrimitive.Close data-slot="dialog-close" className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            <lucide_react_1.XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>)}
      </DialogPrimitive.Content>
    </DialogPortal>);
}
function DialogHeader(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<div data-slot="dialog-header" className={(0, utils_1.cn)("flex flex-col gap-2 text-center sm:text-left", className)} {...props}/>);
}
function DialogFooter(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<div data-slot="dialog-footer" className={(0, utils_1.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props}/>);
}
function DialogTitle(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<DialogPrimitive.Title data-slot="dialog-title" className={(0, utils_1.cn)("text-lg leading-none font-semibold", className)} {...props}/>);
}
function DialogDescription(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<DialogPrimitive.Description data-slot="dialog-description" className={(0, utils_1.cn)("text-muted-foreground text-sm", className)} {...props}/>);
}
