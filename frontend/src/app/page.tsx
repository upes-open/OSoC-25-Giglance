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

const HeroSection: React.FC = () => {
  const HERO_ITEMS: HeroItems = {
    heading: {
      lines: ["Freelance Jobs and Talents at Your Fingertips"],
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
    <div className="pointer-events-auto flex h-full flex-col overflow-x-hidden bg-gradient-to-br from-blue-200 to-transparent select-none md:flex-row">
      {/* Left Side */}
      <div
        className={[
          "flex h-auto flex-col items-start justify-start px-4 pt-10",
          "sm:px-6 md:px-8 md:pt-0 lg:px-8 lg:pt-40 xl:mx-48 xl:pt-40",
          "md:max-w-[550px] md:items-start md:justify-start md:pt-20",
          "lg:w-[50%] lg:gap-0",
          "max-w-[60vw] sm:max-w-[500px]",
        ].join(" ")}
      >
        {/* TEXT */}
        <div className="mb-4 flex items-center gap-2 md:mb-6">
          <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-500 md:h-6 md:w-11">
            <div className="bg-secondary animate-left-to-right mr-1 ml-auto h-3 w-3 transform rounded-full transition-transform md:h-4 md:w-4"></div>
          </div>
          <span className="animate-fade-in-up text-foreground text-xs font-medium delay-100 md:text-sm">
            {HERO_ITEMS.subheading}
          </span>
        </div>
        <h1
          className={[
            "animate-fade-in-up text-foreground mb-4 font-bold tracking-tight",
            "text-3xl leading-tight sm:text-4xl md:mb-6 md:min-w-[30vw] md:text-5xl md:leading-none",
            "lg:text-md lg:max-w-md lg:leading-none",
          ].join(" ")}
        >
          {HERO_ITEMS.heading.lines[0]}
        </h1>
        <div
          className={[
            "animate-fade-in mb-6 rounded-lg text-sm",
            "md:text-light sm:text-lg md:mb-8 md:max-w-[30vw] md:leading-tight md:font-light",
            "lg:text-md lg:max-w-sm",
          ].join(" ")}
        >
          <p className="text-gray-700">{HERO_ITEMS.description}</p>
        </div>
        {/* Profile avatars row */}
        <div className="flex items-center gap-2 pt-2 md:pt-4">
          <div className="flex -space-x-2">
            {HERO_ITEMS.profileAvatars.map(
              (avatar: ProfileAvatar, index: number) => (
                <div
                  key={index}
                  className={`border-secondary h-8 w-8 rounded-full border-2 md:h-10 md:w-10 lg:size-8 ${avatar.bgColor}`}
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
        <div className="text-primary animate-fade-in mt-2 delay-200 md:mt-4 md:max-w-[300px]">
          <p className="lg:text-md font-medium md:text-lg">
            Over <span className="text-primay font-bold">12800+</span>{" "}
            freelancers <br className="sm:hidden" /> to complete your projects
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative mt-10 flex justify-center md:mt-0 md:h-full md:w-auto md:pr-20 lg:h-full lg:w-full lg:justify-end xl:w-auto xl:pr-32 xl:pl-12 2xl:pr-40 2xl:pl-40">
        <div className="relative flex h-full w-full items-center justify-center md:justify-end lg:justify-end">
          {/* Relative container for Hero and Objects */}
          <div className="animate-fade-in-up relative flex h-full w-[400px] max-w-full items-center justify-center">
            {/* Decorative Object 1 */}
            <div className="absolute top-[60%] left-[10%] z-10 md:top-[70%] md:left-[0%]">
              <Image
                src="/object.png"
                alt="Decorative Object"
                width={400}
                height={300}
                className="animate-fade-in h-auto w-40 object-contain md:w-70"
              />
            </div>
            {/* Decorative Object 2 */}
            <div className="absolute top-[30%] left-[45%] z-10 md:top-[70%] md:left-[30%]">
              <Image
                src="/object.png"
                alt="Decorative Object"
                width={400}
                height={300}
                className="animate-fade-in h-auto w-40 object-contain md:w-70"
              />
            </div>
            {/* Main hero image */}
            <Image
              src={HERO_ITEMS.heroImage}
              alt="Hero Image"
              width={800}
              height={700}
              className="animate-fade-in-up z-20 h-[400px] w-auto object-contain md:h-[700px] md:w-auto lg:h-auto lg:min-w-[400px]"
              priority
            />
            {/* Stat Box (leave unchanged) */}
            <div className="animate-fade-in-up absolute right-4 bottom-4 z-50 flex flex-col items-end justify-center gap-2 delay-300 sm:right-8 sm:bottom-8 md:top-60 md:right-0 md:bottom-auto">
              <div className="flex items-center justify-center gap-1 rounded-lg bg-white px-4 py-2 shadow-lg sm:gap-2 md:px-5 md:py-5 lg:px-10 lg:py-6">
                <div>
                  <div className="flex items-center justify-center text-base font-bold md:text-lg">
                    30K+{" "}
                    <span className="pb-0.5 pl-2 font-bold sm:text-xl md:text-xl">
                      💼
                    </span>
                  </div>
                  <div className="text-primary lg:text-md justify-center pt-1 text-center text-xs font-medium opacity-80 sm:pt-2 sm:text-sm md:text-sm">
                    People got hired
                  </div>
                </div>
              </div>
            </div>
            {/* End Stat Box */}
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
