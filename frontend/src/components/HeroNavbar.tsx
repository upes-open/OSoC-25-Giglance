import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Find a Job", href: null },
  { label: "Talents", href: "/talents" },
  { label: "Features", href: "/features" },
  { label: "About", href: null },
  { label: "Login", href: null, className: "text-blue-600" },
  { label: "Sign Up", href: "/docs", isButton: true },
];

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
            {NAV_ITEMS.map((item, idx) =>
              item.isButton ? (
                <Link
                  href={item.href!}
                  className="inline-block"
                  key={item.label}
                >
                  <Button
                    size="lg"
                    variant={"defaultBlue"}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <div
                  key={item.label}
                  className={`group mr-6 ml-auto flex items-center transition-all duration-300 transform-3d ${item.className || ""}`}
                >
                  {item.href ? (
                    <Link href={item.href} className="relative">
                      <h1 className="after:block after:h-[2px] after:origin-left after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 after:content-[''] group-hover:after:scale-x-100">
                        {item.label}
                      </h1>
                    </Link>
                  ) : (
                    <h1 className="relative after:block after:h-[2px] after:origin-left after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 after:content-[''] group-hover:after:scale-x-100">
                      {item.label}
                    </h1>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNavbar;
