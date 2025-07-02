"use client";

import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface MobileNavProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  onTermsClick,
  onPrivacyClick,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleModalClick = (callback: () => void) => {
    setIsOpen(false);
    // Small delay to allow sheet to close before opening modal
    setTimeout(callback, 150);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 sm:h-10 sm:w-10 md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[85vw] max-w-xs p-0 sm:max-w-sm md:max-w-md"
      >
        <SheetHeader className="border-border bg-muted/30 border-b px-4 py-4 sm:px-6 sm:py-6">
          <SheetTitle className="text-foreground text-left text-lg font-semibold sm:text-xl">
            Navigation
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col px-4 py-4 sm:px-6 sm:py-6">
          <div className="space-y-1">
            <Link
              href="/docs"
              className="text-foreground hover:bg-accent hover:text-accent-foreground group flex items-center rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors sm:py-3 sm:text-base"
              onClick={handleLinkClick}
            >
              <span className="transition-transform group-hover:translate-x-0.5">
                Documentation
              </span>
            </Link>

            <Link
              href="/explore"
              className="text-foreground hover:bg-accent hover:text-accent-foreground group flex items-center rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors sm:py-3 sm:text-base"
              onClick={handleLinkClick}
            >
              <span className="transition-transform group-hover:translate-x-0.5">
                Explore
              </span>
            </Link>

            <Link
              href="/register"
              className="text-foreground hover:bg-accent hover:text-accent-foreground group flex items-center rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors sm:py-3 sm:text-base"
              onClick={handleLinkClick}
            >
              <span className="transition-transform group-hover:translate-x-0.5">
                Become a Seller
              </span>
            </Link>
          </div>

          <div className="border-border my-4 border-t sm:my-6"></div>

          <div className="space-y-1">
            <button
              onClick={() => handleModalClick(onTermsClick)}
              className="text-muted-foreground hover:bg-accent hover:text-accent-foreground group flex w-full items-center rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors sm:py-3 sm:text-base"
            >
              <span className="transition-transform group-hover:translate-x-0.5">
                Terms of Service
              </span>
            </button>

            <button
              onClick={() => handleModalClick(onPrivacyClick)}
              className="text-muted-foreground hover:bg-accent hover:text-accent-foreground group flex w-full items-center rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors sm:py-3 sm:text-base"
            >
              <span className="transition-transform group-hover:translate-x-0.5">
                Privacy Policy
              </span>
            </button>
          </div>

          <div className="border-border my-4 border-t sm:my-6"></div>

          <div className="space-y-3 sm:space-y-4">
            <Button
              variant="outline"
              className="h-10 w-full justify-start text-sm font-medium sm:h-11 sm:text-base"
              disabled
              title="Coming soon - once Clerk integration is complete"
            >
              Sign Up
            </Button>

            <Button
              variant="default"
              className="h-10 w-full justify-start text-sm font-medium sm:h-11 sm:text-base"
              disabled
              title="Coming soon - once Clerk integration is complete"
            >
              Login
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
