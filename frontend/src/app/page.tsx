import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface ProfileAvatar {
  src: string;
  alt: string;
  bgColor: string;
}

interface HeroHeading {
  lines: string[];
}

interface HeroItems {
  heading: HeroHeading;
  subheading: string;
  description: string;
  profileAvatars: ProfileAvatar[];
  freelancersCount: string;
  heroImage: string;
}

const HeroSection: React.FC = () => {
  const HERO_ITEMS: HeroItems = {
    heading: {
      lines: ["Freelance Jobs", "and Talents at", "Your Fingertips"],
    },
    subheading: "Find Your Dream Job",
    description:
      "Connect with top freelancers and clients on our platform! Find your perfect match for your next project.",
    profileAvatars: [
      { src: "/Ellipse13.png", alt: "Avatar 1", bgColor: "bg-gray-300" },
      { src: "/Ellipse14.png", alt: "Avatar 2", bgColor: "bg-orange-400" },
      { src: "/Ellipse15.png", alt: "Avatar 3", bgColor: "bg-gray-400" },
    ],
    freelancersCount: "Over 12800+ freelancers to complete your projects",
    heroImage: "/removed-bg.png",
  };

  return (
    <div className="pointer-events-auto min-h-screen bg-gradient-to-br from-blue-200 to-transparent select-none">
      <div className="flex flex-col items-start justify-start px-4 pt-10 sm:px-6 md:px-8 md:pt-20 lg:px-8 lg:pt-40 xl:mx-48 xl:pt-40">
        <div className="mb-4 flex items-center gap-3 md:mb-6">
          <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-500 md:h-6 md:w-11">
            <div className="bg-secondary animate-left-to-right mr-1 ml-auto h-3 w-3 transform rounded-full transition-transform md:h-4 md:w-4"></div>
          </div>
          <span className="animate-fade-in-up text-foreground text-xs font-medium delay-100 md:text-sm">
            {HERO_ITEMS.subheading}
          </span>
        </div>

        <h1 className="animate-fade-in-up text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-[5rem]">
          {HERO_ITEMS.heading.lines.map((line: string, index: number) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="animate-fade-in mb-6 max-w-md rounded-lg text-base md:mb-8 md:text-xl lg:text-2xl">
          <p className="text-gray-700">{HERO_ITEMS.description}</p>
        </div>

        {/* Profile avatars row */}
        <div className="flex items-center gap-2 pt-2 md:pt-4">
          <div className="flex -space-x-2">
            {HERO_ITEMS.profileAvatars.map(
              (avatar: ProfileAvatar, index: number) => (
                <div
                  key={index}
                  className={`border-secondary h-8 w-8 rounded-full border-2 md:h-10 md:w-10 ${avatar.bgColor}`}
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    width={40}
                    height={40}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              ),
            )}
          </div>
        </div>
        {/* There was no safe way to implement this while using the dictionary so this part is hard coded*/}
        <div className="text-primary animate-fade-in mt-2 size-1/6 delay-200 md:mt-4">
          <p className="md:text-md text-md font-medium">
            Over <span className="text-primay font-bold">12800+</span>{" "}
            freelancers <br className="sm:hidden" /> to complete your projects
          </p>
          page
        </div>
      </div>
      {/* Right Side */}
      <div className="animate-fade-in relative hidden flex-1 items-center justify-center lg:flex lg:justify-end">
        {/* Main hero image */}
        <div className="absolute bottom-2 z-10 lg:right-1/5">
          <Image
            src={HERO_ITEMS.heroImage}
            alt="Hero Image"
            width={900}
            height={1000}
            className="h-auto w-full max-w-2xl object-contain lg:w-md"
            priority
          />
        </div>
        <div className="absolute right-1 bottom-40 z-0 lg:right-44">
          <Image
            src="/object.png"
            alt="Decorative Object"
            width={400}
            height={300}
            className="h-24 w-24 object-contain opacity-80 lg:h-32 lg:w-80"
          />
        </div>
        <div className="absolute bottom-40 left-8 z-0 lg:left-1/2">
          <Image
            src="/object.png"
            alt="Decorative Object"
            width={400}
            height={300}
            className="h-24 w-24 object-contain opacity-80 lg:h-32 lg:w-80"
          />
        </div>
        <div className="animate-fade-in-up relative right-1/6 bottom-96 z-50 flex flex-col items-end justify-center gap-4 delay-300">
          <div className="flex items-center justify-center gap-2 rounded-lg bg-white px-10 py-5 shadow-lg">
            <div>
              <div className="flex items-center justify-center font-bold lg:text-4xl">
                30K+ <span className="pb-1 pl-2 font-bold lg:text-4xl">💼</span>
              </div>
              <div className="text-primary text-md justify-center pt-2 text-center">
                People got hired
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return <HeroSection />;
};

export default Page;
