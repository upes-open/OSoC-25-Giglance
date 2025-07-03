"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
const link_1 = __importDefault(require("next/link"));
const ApiTester_1 = __importDefault(require("@/components/ApiTester"));
const Page = () => {
    return (<div className="min-h-screen">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center mt-30 flex flex-col items-center justify-center gap-8">
          <div className=''>

            <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">
              Giglance
            </h1>
            <h2 className='text-xl md:text-2xl font-semibold text-muted-foreground mt-8'>
              Turning Contributors into Confident Developers
            </h2>
          </div>
          <link_1.default href="/docs" className="inline-block">
            <button_1.Button size="lg" className='cursor-pointer'>
              Read Docs
              <lucide_react_1.ArrowRight className="ml-2 h-4 w-4"/>
            </button_1.Button>
          </link_1.default>
        </div>

        {/* API Testing Section */}
        <div className="mt-12">
          <ApiTester_1.default />
        </div>
      </main>
    </div>);
};
exports.default = Page;
