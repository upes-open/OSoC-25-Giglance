import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-border bg-card/50 border-b backdrop-blur-sm">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
