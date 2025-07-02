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
            <div className="bg-secondary mr-1 ml-auto h-3 w-3 transform rounded-full transition-transform md:h-4 md:w-4"></div>
          </div>
          <span className="text-foreground text-xs font-medium md:text-sm">
            {HERO_ITEMS.subheading}
          </span>
        </div>

        <h1 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-[5rem]">
          {HERO_ITEMS.heading.lines.map((line: string, index: number) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Blue outlined text box */}
        <div className="mb-6 max-w-md rounded-lg text-base md:mb-8 md:text-xl lg:text-2xl">
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
        <div className="text-primary mt-2 size-1/6 md:mt-4">
          <p className="md:text-md text-md font-medium">
            Over <span className="text-primary font-bold">12800+</span>{" "}
            freelancers <br className="sm:hidden" /> to complete your projects
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div className="relative hidden flex-1 items-center justify-center lg:flex">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 z-0 flex flex-col items-center justify-center gap-4">
          <div className="bg-secondary flex items-center justify-center gap-2 rounded-lg px-10 py-5 shadow-lg">
            <div>
              <div className="flex items-center justify-center text-xl font-bold">
                30K+ <span className="pb-1 pl-2 text-2xl font-bold">💼</span>
              </div>
              <div className="text-primary justify-center pt-5 text-sm">
                People got hired
              </div>
            </div>
          </div>
        </div>

        {/* Main hero image */}
        <div className="relative z-10">
          <Image
            src={HERO_ITEMS.heroImage}
            alt="Hero Image"
            width={600}
            height={700}
            className="h-auto w-full max-w-lg object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return <HeroSection />;
};

export default Page;
