import SearchBar from "@/components/SearchBar";
import BrowseByCategory from "@/components/BrowseByCategory";
import ContactSection from "@/components/contact-us/Contactsection";
import HeroSection from "@/components/HeroSection";


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
          <Link href="/docs" className="inline-block">
            <Button size="lg" className="cursor-pointer">
              Read Docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        {/* Blue outlined text box */}
        <div>
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Page;
