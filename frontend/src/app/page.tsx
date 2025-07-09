import SearchBar from "@/components/SearchBar";
import BrowseByCategory from "@/components/BrowseByCategory";
import ContactSection from "@/components/contact-us/Contactsection";

import HeroSection from "@/components/HeroSection";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react'
import { FaqAccordion } from "@/components/FaqAccordion";


const Page: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col items-center justify-center px-4">
        <div className="mt-10 flex flex-col items-center justify-center gap-8 text-center">
          {/* 🔍 SearchBar Component Here */}
          <div className="w-full max-w-6xl px-2 sm:px-4">
            <SearchBar />
          </div>
          {/* Browse talent by Category Section */}
          <div>
            <BrowseByCategory />
          </div>
        </div>


        
        {/* FAQ Section */}
        <div className="mt-16 w-full max-w-6xl px-4">
          <FaqAccordion />
        </div>
        
        
        <div>
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Page;
