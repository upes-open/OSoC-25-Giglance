// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/public(.*)', // Optional: add your public API routes here
]);

export default clerkMiddleware(async (auth, req) => {
  // Allow all public routes
  if (isPublicRoute(req)) return;

  // Manually check for authentication
  const { userId } = await auth();

  if (!userId) {
    // Unauthenticated — redirect to sign-in
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url); // Redirect back after login
    return NextResponse.redirect(signInUrl);
  }

  // User is authenticated — allow access
});


export const config = {
  matcher: [
    // Protect everything except:
    // - Next.js internals (_next, static files)
    // - Public file types (e.g., images, scripts, stylesheets)
    // - Routes listed in publicRoutes above
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always include API routes
    '/(api|trpc)(.*)',
  ],
};
