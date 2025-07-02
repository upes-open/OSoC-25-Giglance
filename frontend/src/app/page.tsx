import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroNavbar from "@/components/HeroNavbar";
import Image from "next/image";

const HERO_ITEMS = {
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
};

const HeroSection: React.FC = () => {
  return (
    <div className="pointer-events-auto min-h-screen bg-gradient-to-br from-blue-200 to-transparent select-none">
      <HeroNavbar />
      <div className="max-h-xl mx-48 flex max-w-2xl flex-col items-start justify-start pt-20 sm:px-6 lg:px-8 lg:pt-64">
        <div className="mb-6 flex items-center gap-3">
          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500">
            <div className="mr-1 ml-auto h-4 w-4 transform rounded-full bg-white transition-transform"></div>
          </div>
          <span className="text-foreground text-sm font-medium">
            {HERO_ITEMS.subheading}
          </span>
        </div>

        <h1 className="text-foreground mb-6 text-6xl font-bold tracking-tight md:text-6xl">
          {HERO_ITEMS.heading.lines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Blue outlined text box */}
        <div className="mb-8 max-w-md rounded-lg text-2xl">
          <p className="text-gray-700">{HERO_ITEMS.description}</p>
        </div>

        {/* Profile avatars row */}
        <div className="flex items-center gap-2 pt-4">
          <div className="flex -space-x-2">
            {HERO_ITEMS.profileAvatars.map((avatar, index) => (
              <div
                key={index}
                className={`h-10 w-10 rounded-full border-2 border-white ${avatar.bgColor}`}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  width={40}
                  height={40}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* There was no non complex way of implemening this so this will be not picked from the objext. Can be put as a #TODO*/}
        <div className="mt-4 text-gray-600">
          <p className="text-md font-medium">
            Over <span className="font-bold text-blue-600">12800+</span>{" "}
            freelancers <br /> to complete your projects
          </p>
        </div>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return <HeroSection />;
};

export default Page;
