"use client";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

const ConditionalNavbar: React.FC = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return <Navbar />;
};

export default ConditionalNavbar;
