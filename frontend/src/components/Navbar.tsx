'use client'
import Image from "next/image";
import React from "react";
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import { useUser,UserButton } from '@clerk/nextjs'

const Navbar: React.FC = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  const router = useRouter();
  return (
    <nav className="border-border bg-card/50 border-b backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
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
          <div className='flex items-center gap-4'>
            {isLoaded ? (
              isSignedIn ? (
                <UserButton afterSignOutUrl='/' />
              ) : (
                <Button onClick={() => router.push('/sign-in')} size='sm'>
                  Sign in
                </Button>
              )
            ) : (
              <span className='text-sm text-muted-foreground'>Loading...</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
