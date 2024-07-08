// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Reddit_Mono } from 'next/font/google';
// import Link from 'next/link';

import Image from 'next/image'

export default function Home() {
  // return (
  //   <>
  //     <main className="flex flex-col max-w-xl w-full mx-auto">
  //       <div className='flex flex-row space-x-4 items-center'>
  //         <Link className='' href="/">WingMate</Link>
  //         <Link className='py-2 px-4 my-5 bg-green-500 text-white font-semibold
  //                           rounded-lg shadow-md hover:bg-green-700 focus:outline-none
  //                           focus:ring-2 focus:ring-green-400 focus:ring-opacity-75' href={'/login'}>Login</Link>
  //         <Link className='py-2 px-4 my-5 bg-blue-500 text-white font-semibold
  //                           rounded-lg shadow-md hover:bg-green-700 focus:outline-none
  //                           focus:ring-2 focus:ring-green-400 focus:ring-opacity-75' href={'/signup'}>Sign Up</Link>
  //       </div>

  //       <div className='flex flex-row'>
  //         {/* Need to add the Login / Signup form here but read the docs on Nextjs forms */}
  //       </div>

  //       <div className='flex flex-row'>Some cool quote or city icon </div>
  //     </main>
  //   </>
  // );

  return (
    <>
      <main className="flex flex-col max-w-xl w-full mx-auto p-5">
        <h1 className="text-5xl font-extrabold mb-4 mt-5 tracking-wide">Happy Birthday 🤠</h1>
        <h1 className="text-5xl font-extrabold mb-4 mt-5 tracking-wide">✨ Mya Shell ✨</h1>
        <h6>My baby, my girlfriend, mi mona. </h6>

        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <Image src={"/mya-birthday-card.jpg"} width={500} height={380} className="rounded-md" alt="Birthday Card Image" />
          </div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            &quot; &amp; then I met you, &amp; slowly but all at once my whole world began to change.&quot; - r.m broderick
          </blockquote>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <Image src={"/bray-mya-first-game.jpg"} width={500} height={380} className="rounded-md" alt="First Game Image" />
            <Image src={"/bray-mya-interns.jpg"} width={500} height={380} className="rounded-md" alt="First Game Image" />
          </div>
          <Image src={"/bray-mya-first-contact.png"} width={500} height={380} className="rounded-md" alt="First Game Image" />
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Happy Birthday baby, I&apos;ll see you soon and I cannot wait to celebrate many more together.
          </p>
          <p className="text-sm text-muted-foreground">a brayckner production.</p>
        </div>
      </main>
    </>
  );
}
