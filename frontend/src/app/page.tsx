// frontend/src/app/page.tsx
import Link from 'next/link';
import ApiTester from '@/components/ApiTester';
import BrowseTalent from '@/components/BrowseTalent';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BrowseTalent />
        <ApiTester />
      </main>
      <Footer />
    </div>
  );
}
