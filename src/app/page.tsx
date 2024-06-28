import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="flex flex-col max-w-xl w-full mx-auto">
        <div className='flex flex-row space-x-4 items-center'>
          <Link className='' href="/">WingMate</Link>
          <Link className='py-2 px-4 my-5 bg-green-500 text-white font-semibold
                            rounded-lg shadow-md hover:bg-green-700 focus:outline-none
                            focus:ring-2 focus:ring-green-400 focus:ring-opacity-75' href={'/login'}>Login</Link>
          <Link className='py-2 px-4 my-5 bg-blue-500 text-white font-semibold
                            rounded-lg shadow-md hover:bg-green-700 focus:outline-none
                            focus:ring-2 focus:ring-green-400 focus:ring-opacity-75' href={'/signup'}>Sign Up</Link>
        </div>

        <div className='flex flex-row'>
          {/* Need to add the Login / Signup form here but read the docs on Nextjs forms */}
        </div>

        <div className='flex flex-row'>Some cool quote or city icon </div>
      </main>
    </>
  );
}
