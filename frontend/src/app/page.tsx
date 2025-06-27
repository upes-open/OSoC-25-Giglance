import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">
            Giglance
          </h1>
          <h2 className='text-xl md:text-2xl font-semibold text-muted-foreground mt-8'>
            Turning Contributors into Confident Developers
          </h2>
        </div>
        <div>
          <Link href="/docs" className="mt-8 inline-block">
            <Button size="lg">
              Read Docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default page