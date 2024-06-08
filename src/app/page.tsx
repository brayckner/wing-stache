import { ModeToggle } from '@/components/ui/mode-toggle';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Happy 24th Birthday Jack Scanlon
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Hey Jack just want to wish you a happy birthday. Since we met many moons ago,
          I&apos;ve always admired the curiosity you have towards the world and your ability
          to percisely articulate questions about it. I consider you a great friend, I
          consider you a brother and I hold a great deal of respect for the man and human
          that you are. Cheers to twenty four. 🥂
        </p>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image src={"/jack_club_headshot.jpg"} width={1000} height={760} className='hidden md:block' alt='Screenshots of the dashboard project showing desktop version' />
          <Image src={"/jack_club_headshot.jpg"} width={560} height={620} className='block md:hidden' alt='Screenshot of the dashboard project showing mobile version' />
        </div>
      </div>
    </main>
  );
}
