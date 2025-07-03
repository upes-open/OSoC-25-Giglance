import Link from "next/link";
import Image from "next/image";

// Interfaces remain unchanged
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

// MOBILE-FIRST: Start with mobile classes, override upwards
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
    <div className="pointer-events-auto flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-br from-blue-200 to-transparent select-none md:flex-row">
      {/* Left Side */}
      <div className="flex flex-1 flex-col items-start justify-start px-4 pt-10 sm:px-6 md:px-8 md:pt-20 lg:px-8 lg:pt-40 xl:mx-48 xl:pt-40">
        {/* TEXT */}
        <div className="mb-4 flex items-center gap-3 md:mb-6">
          <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-500 md:h-6 md:w-11">
            <div className="bg-secondary animate-left-to-right mr-1 ml-auto h-3 w-3 transform rounded-full transition-transform md:h-4 md:w-4"></div>
          </div>
          <span className="animate-fade-in-up text-foreground text-xs font-medium delay-100 md:text-sm">
            {HERO_ITEMS.subheading}
          </span>
        </div>
        <h1 className="animate-fade-in-up text-foreground mb-4 text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-[5rem] lg:leading-none">
          {HERO_ITEMS.heading.lines.map((line: string, index: number) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>
        <div className="animate-fade-in mb-6 max-w-[50%] rounded-lg text-sm sm:text-lg md:mb-8 md:max-w-md md:text-xl md:leading-tight lg:text-2xl">
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
        {/* Hard-coded freelancers count */}
        <div className="text-primary animate-fade-in mt-2 delay-200 md:mt-4">
          <p className="md:text-md lg:text-md font-medium">
            Over <span className="text-primay font-bold">12800+</span>{" "}
            freelancers <br className="sm:hidden" /> to complete your projects
            page
          </p>
        </div>
      </div>
      {/* Right Side */}

      <div className="flex w-full justify-center">
        <div className="relative -top-[10%] flex flex-1 items-end justify-center md:top-10 md:-right-10 md:justify-end lg:right-0 lg:mt-0 lg:items-end xl:items-center">
          {/* Relative container for Hero and Objects */}
          <div className="relative flex w-[800px] max-w-full items-center justify-center">
            {/* Decorative Object 1 - position using absolute but relative to hero container */}
            <div className="absolute top-[60%] left-[30%] z-10">
              <Image
                src="/object.png"
                alt="Decorative Object"
                width={400}
                height={300}
                className="animate-fade-in h-auto w-40 object-contain opacity-80"
              />
            </div>
            {/* Decorative Object 2 */}
            <div className="absolute top-[30%] left-[50%] z-10">
              <Image
                src="/object.png"
                alt="Decorative Object"
                width={400}
                height={300}
                className="animate-fade-in h-auto w-40 object-contain opacity-80"
              />
            </div>
            {/* Main hero image */}
            <Image
              src={HERO_ITEMS.heroImage}
              alt="Hero Image"
              width={800}
              height={700}
              className="animate-fade-in-up z-20 h-[400px] w-[500px] object-contain md:h-[400px] md:w-[500px] lg:h-[600px] lg:w-[800px] xl:h-[800px] xl:w-[900px]"
              priority
            />
          </div>
          {/* Stat Box */}
          <div className="animate-fade-in-up absolute right-[30%] bottom-[20%] z-50 flex flex-col items-end justify-center gap-2 pr-2 delay-300 sm:gap-4">
            <div className="flex items-center justify-center gap-1 rounded-lg bg-white px-4 py-2 shadow-lg sm:gap-2 md:px-8 md:py-5 lg:px-10 lg:py-6">
              <div>
                <div className="flex items-center justify-center text-base font-bold md:text-xl">
                  30K+{" "}
                  <span className="pb-0.5 pl-2 font-bold sm:text-xl md:text-xl">
                    💼
                  </span>
                </div>
                <div className="text-primary lg:text-md justify-center pt-1 text-center text-xs font-medium opacity-80 sm:pt-2 sm:text-sm md:text-lg">
                  People got hired
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return <HeroSection />;
};

export default Page;
