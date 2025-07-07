import SearchBar from "@/components/SearchBar";
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
