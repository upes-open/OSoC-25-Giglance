import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ApiTester from '@/components/ApiTester'
import ContactSection from '@/components/contact-us/ContactSection'

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

        {/* API Testing Section */}
        <div className="mt-12">
          <ApiTester />
        </div>
        <div>
          <ContactSection />
        </div>
      </main>
    </div>
  )
}

export default Page