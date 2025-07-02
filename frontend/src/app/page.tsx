import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroNavbar: React.FC = () => {
  return (
    <div className="top-0 right-0 left-0 z-50 border-none pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-start">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Giglance Logo"
              width={40}
              height={40}
              className="h-10 w-auto rounded-full"
            />
            <span className="text-2xl font-bold">Giglance</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="ml-auto flex items-center space-x-4">
              <h1>Find a Job</h1>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Link href="/talents">
                <h1>Talents</h1>
              </Link>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Link href="/features">
                <h1>Features</h1>
              </Link>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <h1>About</h1>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <h1>Login</h1>
            </div>
            <Link href="/docs" className="inline-block">
              <Button
                size="lg"
                variant={"defaultBlue"}
                className="cursor-pointer"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    // <div className="min-h-screen">
    //   {/* Main Content */}
    //   <main className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col items-center justify-center px-4">
    //     <div className="mt-30 flex flex-col items-center justify-center gap-8 text-center">
    //       <div className="">
    //         <h1 className="text-foreground text-6xl font-bold tracking-tight md:text-8xl">
    //           Giglance
    //         </h1>
    //         <h2 className="text-muted-foreground mt-8 text-xl font-semibold md:text-2xl">
    //           Turning Contributors into Confident Developers
    //         </h2>
    //       </div>
    //       <Link href="/docs" className="inline-block">
    //         <Button size="lg" className="cursor-pointer">
    //           Read Docs
    //           <ArrowRight className="ml-2 h-4 w-4" />
    //         </Button>
    //       </Link>
    //     </div>
    //     {/* API Testing Section */}
    //     <div className="mt-12"></div>
    //   </main>
    // </div>
    <div id="hero-section" className="bg-background min-h-screen">
      <HeroNavbar />
      <div
        id="text box towards left"
        className="max-h-xl mx-48 flex max-w-2xl flex-col items-start justify-start pt-20 sm:px-6 lg:px-8 lg:pt-64"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500">
            <div className="mr-1 ml-auto h-4 w-4 transform rounded-full bg-white transition-transform"></div>
          </div>
          <span className="text-foreground text-sm font-medium">
            Find Your Dream Job
          </span>
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

        {/* Profile avatars row */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-300">
              <Image
                src="/og-image.png"
                alt="Avatar 1"
                width={40}
                height={40}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="h-10 w-10 rounded-full border-2 border-white bg-orange-400"></div>
            <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
