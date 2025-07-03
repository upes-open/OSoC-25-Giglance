import "@/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "@/providers/queryProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Giglance - Freelance Platform",
  description: "A platform that turns contributors into confident developers.",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="antialiased">
        <Providers>
          <div className="relative min-h-screen w-full bg-background">
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <Toaster />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}