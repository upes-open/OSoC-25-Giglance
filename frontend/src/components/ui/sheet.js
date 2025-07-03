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
exports.Sheet = Sheet;
exports.SheetTrigger = SheetTrigger;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetHeader = SheetHeader;
exports.SheetFooter = SheetFooter;
exports.SheetTitle = SheetTitle;
exports.SheetDescription = SheetDescription;
const React = __importStar(require("react"));
const SheetPrimitive = __importStar(require("@radix-ui/react-dialog"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("@/lib/utils");
function Sheet(_a) {
    var props = __rest(_a, []);
    return <SheetPrimitive.Root data-slot="sheet" {...props}/>;
}
function SheetTrigger(_a) {
    var props = __rest(_a, []);
    return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props}/>;
}
function SheetClose(_a) {
    var props = __rest(_a, []);
    return <SheetPrimitive.Close data-slot="sheet-close" {...props}/>;
}
function SheetPortal(_a) {
    var props = __rest(_a, []);
    return <SheetPrimitive.Portal data-slot="sheet-portal" {...props}/>;
}
function SheetOverlay(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<SheetPrimitive.Overlay data-slot="sheet-overlay" className={(0, utils_1.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className)} {...props}/>);
}
function SheetContent(_a) {
    var { className, children, side = "right" } = _a, props = __rest(_a, ["className", "children", "side"]);
    return (<SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content data-slot="sheet-content" className={(0, utils_1.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className)} {...props}>
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <lucide_react_1.XIcon className="size-4"/>
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>);
}
function SheetHeader(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<div data-slot="sheet-header" className={(0, utils_1.cn)("flex flex-col gap-1.5 p-4", className)} {...props}/>);
}
function SheetFooter(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<div data-slot="sheet-footer" className={(0, utils_1.cn)("mt-auto flex flex-col gap-2 p-4", className)} {...props}/>);
}
function SheetTitle(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<SheetPrimitive.Title data-slot="sheet-title" className={(0, utils_1.cn)("text-foreground font-semibold", className)} {...props}/>);
}
function SheetDescription(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<SheetPrimitive.Description data-slot="sheet-description" className={(0, utils_1.cn)("text-muted-foreground text-sm", className)} {...props}/>);
}
