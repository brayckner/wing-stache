import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>App Page</p>
        <Button>Click Me</Button>
        <ModeToggle />
      </div>
    </main>
  );
}
