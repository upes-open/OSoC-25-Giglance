"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { MarkdownModal } from "@/components/MarkdownModal";

const Navbar: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const openTermsModal = () => setIsTermsOpen(true);
  const closeTermsModal = () => setIsTermsOpen(false);

  const openPrivacyModal = () => setIsPrivacyOpen(true);
  const closePrivacyModal = () => setIsPrivacyOpen(false);

  return (
    <>
      <nav className="border-border bg-card/50 supports-[backdrop-filter]:bg-card/60 sticky top-0 z-40 border-b backdrop-blur-sm">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="flex h-14 items-center justify-between sm:h-16 lg:h-18">
            {/* Logo section */}
            <Link
              href="/"
              className="group flex flex-shrink-0 items-center gap-2 transition-all duration-200 hover:opacity-80 sm:gap-3"
            >
              <Image
                src="/logo.png"
                alt="Giglance Logo"
                width={40}
                height={40}
                className="h-8 w-8 rounded-full transition-transform group-hover:scale-105 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
              />
              <span className="text-foreground text-lg font-bold whitespace-nowrap sm:text-xl lg:text-2xl">
                Giglance
              </span>
            </Link>

            {/* Desktop Navigation - Multi-tier responsive */}
            {/* Large screens: Show all links */}
            <div className="hidden items-center space-x-6 xl:flex 2xl:space-x-8">
              <Link
                href="/docs"
                className="text-foreground hover:text-primary group relative text-sm font-medium whitespace-nowrap transition-colors duration-200 lg:text-base"
              >
                Documentation
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="/explore"
                className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200 lg:text-base"
              >
                Explore
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="/register"
                className="text-foreground hover:text-primary group relative text-sm font-medium whitespace-nowrap transition-colors duration-200 lg:text-base"
              >
                Become a Seller
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </Link>

              <button
                onClick={openTermsModal}
                className="text-muted-foreground hover:text-foreground group relative text-sm font-medium whitespace-nowrap transition-colors duration-200 lg:text-base"
              >
                Terms of Service
                <span className="bg-muted-foreground absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </button>

              <button
                onClick={openPrivacyModal}
                className="text-muted-foreground hover:text-foreground group relative text-sm font-medium whitespace-nowrap transition-colors duration-200 lg:text-base"
              >
                Privacy Policy
                <span className="bg-muted-foreground absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </button>

              <div className="border-border ml-4 flex items-center space-x-2 border-l pl-4 lg:ml-6 lg:space-x-3 lg:pl-6">
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  title="Coming soon - once Clerk integration is complete"
                  className="text-xs font-medium transition-all duration-200 hover:scale-105 disabled:hover:scale-100 lg:text-sm"
                >
                  Sign Up
                </Button>

                <Button
                  size="sm"
                  disabled
                  title="Coming soon - once Clerk integration is complete"
                  className="text-xs font-medium transition-all duration-200 hover:scale-105 disabled:hover:scale-100 lg:text-sm"
                >
                  Login
                </Button>
              </div>
            </div>

            {/* Medium screens: Show main links only */}
            <div className="hidden items-center space-x-4 lg:flex xl:hidden">
              <Link
                href="/docs"
                className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200"
              >
                Docs
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="/explore"
                className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200"
              >
                Explore
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="/register"
                className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200"
              >
                Sell
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </Link>

              <div className="border-border ml-4 flex items-center space-x-2 border-l pl-4">
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  title="Coming soon - once Clerk integration is complete"
                  className="px-3 text-xs font-medium"
                >
                  Sign Up
                </Button>

                <Button
                  size="sm"
                  disabled
                  title="Coming soon - once Clerk integration is complete"
                  className="px-3 text-xs font-medium"
                >
                  Login
                </Button>
              </div>
            </div>

            {/* Small tablet: Show minimal links */}
            <div className="hidden items-center space-x-3 md:flex lg:hidden">
              <Link
                href="/docs"
                className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200"
              >
                Docs
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="/explore"
                className="text-foreground hover:text-primary group relative text-sm font-medium transition-colors duration-200"
              >
                Explore
                <span className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </Link>

              <Button
                size="sm"
                disabled
                title="Coming soon - once Clerk integration is complete"
                className="px-2 text-xs font-medium"
              >
                Login
              </Button>
            </div>

            {/* Mobile Navigation */}
            <MobileNav
              onTermsClick={openTermsModal}
              onPrivacyClick={openPrivacyModal}
            />
          </div>
        </div>
      </nav>

      {/* Modals */}
      <MarkdownModal
        isOpen={isTermsOpen}
        onClose={closeTermsModal}
        filename="terms-of-service.md"
        title="Terms of Service"
      />

      <MarkdownModal
        isOpen={isPrivacyOpen}
        onClose={closePrivacyModal}
        filename="privacy-policy.md"
        title="Privacy Policy"
      />
    </>
  );
};

export default Navbar;
