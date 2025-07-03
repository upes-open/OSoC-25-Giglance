"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
require("@/styles/globals.css");
const google_1 = require("next/font/google");
const queryProvider_1 = require("@/providers/queryProvider");
const Navbar_1 = __importDefault(require("@/components/Navbar"));
const sonner_1 = require("sonner");
const Footer_1 = __importDefault(require("@/components/Footer"));
exports.metadata = {
    title: "Giglance - Freelance Platform",
    description: "A platform that turns contributors into confident developers.",
    icons: [{ rel: "icon", url: "/favicon.ico" }]
};
const geist = (0, google_1.Geist)({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});
function RootLayout({ children, }) {
    return (<html lang="en" className={`${geist.variable}`}>
      <body>
        <queryProvider_1.Providers>
          <div className="relative min-h-screen w-full bg-background">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className="relative z-10">
              <Navbar_1.default />
              {children}
              <Footer_1.default />
              <sonner_1.Toaster />
            </div>
          </div>
        </queryProvider_1.Providers>
      </body>
    </html>);
}
