"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileNav = void 0;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const sheet_1 = require("@/components/ui/sheet");
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
const MobileNav = ({ onTermsClick, onPrivacyClick, }) => {
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    };
    const handleModalClick = (callback) => {
        setIsOpen(false);
        // Small delay to allow sheet to close before opening modal
        setTimeout(callback, 150);
    };
    return (<sheet_1.Sheet open={isOpen} onOpenChange={setIsOpen}>
      <sheet_1.SheetTrigger asChild>
        <button_1.Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10 md:hidden" aria-label="Open navigation menu">
          <lucide_react_1.Menu className="h-4 w-4 sm:h-5 sm:w-5"/>
        </button_1.Button>
      </sheet_1.SheetTrigger>

      <sheet_1.SheetContent side="right" className="w-[85vw] max-w-xs p-0 sm:max-w-sm md:max-w-md">
        <sheet_1.SheetHeader className="border-border bg-muted/30 border-b px-4 py-4 sm:px-6 sm:py-6">
          <sheet_1.SheetTitle className="text-foreground text-left text-lg font-semibold sm:text-xl">
            Navigation
          </sheet_1.SheetTitle>
        </sheet_1.SheetHeader>

        <nav className="flex flex-col px-4 py-4 sm:px-6 sm:py-6">
          <div className="space-y-1">
            <link_1.default href="/docs" className="text-foreground hover:bg-accent hover:text-accent-foreground group flex items-center rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors sm:py-3 sm:text-base" onClick={handleLinkClick}>
              <span className="transition-transform group-hover:translate-x-0.5">
                Documentation
              </span>
            </link_1.default>

            <link_1.default href="/explore" className="text-foreground hover:bg-accent hover:text-accent-foreground group flex items-center rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors sm:py-3 sm:text-base" onClick={handleLinkClick}>
              <span className="transition-transform group-hover:translate-x-0.5">
                Explore
              </span>
            </link_1.default>

            <link_1.default href="/register" className="text-foreground hover:bg-accent hover:text-accent-foreground group flex items-center rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors sm:py-3 sm:text-base" onClick={handleLinkClick}>
              <span className="transition-transform group-hover:translate-x-0.5">
                Become a Seller
              </span>
            </link_1.default>
          </div>

          <div className="border-border my-4 border-t sm:my-6"></div>

          <div className="space-y-1">
            <button onClick={() => handleModalClick(onTermsClick)} className="text-muted-foreground hover:bg-accent hover:text-accent-foreground group flex w-full items-center rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors sm:py-3 sm:text-base">
              <span className="transition-transform group-hover:translate-x-0.5">
                Terms of Service
              </span>
            </button>

            <button onClick={() => handleModalClick(onPrivacyClick)} className="text-muted-foreground hover:bg-accent hover:text-accent-foreground group flex w-full items-center rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors sm:py-3 sm:text-base">
              <span className="transition-transform group-hover:translate-x-0.5">
                Privacy Policy
              </span>
            </button>
          </div>

          <div className="border-border my-4 border-t sm:my-6"></div>

          <div className="space-y-3 sm:space-y-4">
            <button_1.Button variant="outline" className="h-10 w-full justify-start text-sm font-medium sm:h-11 sm:text-base" disabled title="Coming soon - once Clerk integration is complete">
              Sign Up
            </button_1.Button>

            <button_1.Button variant="default" className="h-10 w-full justify-start text-sm font-medium sm:h-11 sm:text-base" disabled title="Coming soon - once Clerk integration is complete">
              Login
            </button_1.Button>
          </div>
        </nav>
      </sheet_1.SheetContent>
    </sheet_1.Sheet>);
};
exports.MobileNav = MobileNav;
