import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ApiTester from "@/components/ApiTester";
import SearchBar from "@/components/SearchBar";
import ContactSection from "@/components/contact-us/Contactsection";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col items-center justify-center px-4">
        <div className="mt-30 flex flex-col items-center justify-center gap-8 text-center">
          <div className="">
            <h1 className="text-foreground text-6xl font-bold tracking-tight md:text-8xl">
              Giglance
            </h1>
            <h2 className="text-muted-foreground mt-8 text-xl font-semibold md:text-2xl">
              Turning Contributors into Confident Developers
            </h2>
          </div>
          {/* 🔍 SearchBar Component Here */}
          <div className="w-full max-w-6xl px-2 sm:px-4">
            <SearchBar />
          </div>
          <Link href="/docs" className="inline-block">
            <Button size="lg" className="cursor-pointer">
              Read Docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <h1 className="text-foreground mb-6 text-6xl font-bold tracking-tight md:text-6xl">
          Freelance Jobs <br /> and Talents at <br /> Your Fingertips
        </h1>

        {/* Blue outlined text box */}
        <div className="mb-8 max-w-md rounded-lg text-2xl">
          <p className="text-gray-700">
            Connect with top freelancers and clients on our platform! find your
            perfect match for your next project.
          </p>
        </div>
        <div>
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Page;
