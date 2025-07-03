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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importStar(require("react"));
const button_1 = require("@/components/ui/button");
const MobileNav_1 = require("@/components/MobileNav");
const MarkdownModal_1 = require("@/components/MarkdownModal");
const Navbar = () => {
    const [isTermsOpen, setIsTermsOpen] = (0, react_1.useState)(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = (0, react_1.useState)(false);
    const openTermsModal = () => setIsTermsOpen(true);
    const closeTermsModal = () => setIsTermsOpen(false);
    const openPrivacyModal = () => setIsPrivacyOpen(true);
    const closePrivacyModal = () => setIsPrivacyOpen(false);
    return (<>
      <nav className="border-border bg-card/50 supports-[backdrop-filter]:bg-card/60 sticky top-0 z-40 border-b backdrop-blur-sm">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="flex h-14 items-center justify-between sm:h-16 lg:h-18">
            {/* Logo section */}
            <link_1.default href="/" className="group flex flex-shrink-0 items-center gap-2 transition-all duration-200 hover:opacity-80 sm:gap-3">
              <image_1.default src="/logo.png" alt="Giglance Logo" width={40} height={40} className="h-8 w-8 rounded-full transition-transform group-hover:scale-105 sm:h-9 sm:w-9 lg:h-10 lg:w-10"/>
              <span className="text-foreground text-lg font-bold whitespace-nowrap sm:text-xl lg:text-2xl">
                Giglance
              </span>
            </link_1.default>

            {/* Desktop Navigation - Multi-tier responsive */}
            {/* Large screens: Show all links */}
            <div className="hidden items-center space-x-6 xl:flex 2xl:space-x-8">
              <link_1.default href="/docs" className="text-foreground hover:text-primary group relative text-sm font-medium whitespace-nowrap transition-colors duration-200 lg:text-base">
                Documentation
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </link_1.default>

              <link_1.default href="/explore" className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200 lg:text-base">
                Explore
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </link_1.default>

              <link_1.default href="/register" className="text-foreground hover:text-primary group relative text-sm font-medium whitespace-nowrap transition-colors duration-200 lg:text-base">
                Become a Seller
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </link_1.default>

              <button onClick={openTermsModal} className="text-muted-foreground hover:text-foreground group relative text-sm font-medium whitespace-nowrap transition-colors duration-200 lg:text-base">
                Terms of Service
                <span className="bg-muted-foreground absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </button>

              <button onClick={openPrivacyModal} className="text-muted-foreground hover:text-foreground group relative text-sm font-medium whitespace-nowrap transition-colors duration-200 lg:text-base">
                Privacy Policy
                <span className="bg-muted-foreground absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </button>

              <div className="border-border ml-4 flex items-center space-x-2 border-l pl-4 lg:ml-6 lg:space-x-3 lg:pl-6">
                <button_1.Button variant="outline" size="sm" disabled title="Coming soon - once Clerk integration is complete" className="text-xs font-medium transition-all duration-200 hover:scale-105 disabled:hover:scale-100 lg:text-sm">
                  Sign Up
                </button_1.Button>

                <button_1.Button size="sm" disabled title="Coming soon - once Clerk integration is complete" className="text-xs font-medium transition-all duration-200 hover:scale-105 disabled:hover:scale-100 lg:text-sm">
                  Login
                </button_1.Button>
              </div>
            </div>

            {/* Medium screens: Show main links only */}
            <div className="hidden items-center space-x-4 lg:flex xl:hidden">
              <link_1.default href="/docs" className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200">
                Docs
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </link_1.default>

              <link_1.default href="/explore" className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200">
                Explore
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </link_1.default>

              <link_1.default href="/register" className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200">
                Sell
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </link_1.default>

              <div className="border-border ml-4 flex items-center space-x-2 border-l pl-4">
                <button_1.Button variant="outline" size="sm" disabled title="Coming soon - once Clerk integration is complete" className="px-3 text-xs font-medium">
                  Sign Up
                </button_1.Button>

                <button_1.Button size="sm" disabled title="Coming soon - once Clerk integration is complete" className="px-3 text-xs font-medium">
                  Login
                </button_1.Button>
              </div>
            </div>

            {/* Small tablet: Show minimal links */}
            <div className="hidden items-center space-x-3 md:flex lg:hidden">
              <link_1.default href="/docs" className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200">
                Docs
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </link_1.default>

              <link_1.default href="/explore" className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200">
                Explore
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </link_1.default>

              <button_1.Button size="sm" disabled title="Coming soon - once Clerk integration is complete" className="px-2 text-xs font-medium">
                Login
              </button_1.Button>
            </div>

            {/* Mobile Navigation */}
            <MobileNav_1.MobileNav onTermsClick={openTermsModal} onPrivacyClick={openPrivacyModal}/>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <MarkdownModal_1.MarkdownModal isOpen={isTermsOpen} onClose={closeTermsModal} filename="terms-of-service.md" title="Terms of Service"/>

      <MarkdownModal_1.MarkdownModal isOpen={isPrivacyOpen} onClose={closePrivacyModal} filename="privacy-policy.md" title="Privacy Policy"/>
    </>);
};
exports.default = Navbar;
