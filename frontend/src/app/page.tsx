// frontend/src/app/page.tsx
import Link from 'next/link';
import ApiTester from '@/components/ApiTester';
import BrowseTalent from '@/components/BrowseTalent';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import SearchBar from '@/components/SearchBar';
// import HeroSection from '@/components/HeroSection';import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ApiTester from '@/components/ApiTester'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import BrowseTalent from '@/components/BrowseTalent';


const Page: React.FC = () => {
  return (
    <div className="min-h-screen">
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
          <Link href="/docs" className="inline-block">
            <Button size="lg" className='cursor-pointer'>
              Read Docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
         <BrowseTalent />

        {/* API Testing Section */}
        <div className="mt-12">
          <ApiTester />
        </div>
      </main>
    </div>
  )
}

export default Page

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* <HeroSection /> */}
        <BrowseTalent />
        <ApiTester />
      </main>
      <Footer />
    </div>
  );
}
