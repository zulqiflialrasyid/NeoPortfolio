import { Hero } from '@/sections/Hero';
import { AboutSnapshot } from '@/sections/AboutSnapshot';
import { SelectedWorks } from '@/sections/SelectedWorks';
import { Process } from '@/sections/Process';
import { ContactCTA } from '@/sections/ContactCTA';
import { PageTransition } from '@/components/PageTransition';

export function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <AboutSnapshot />
        <SelectedWorks />
        <Process />
        <ContactCTA />
      </main>
    </PageTransition>
  );
}
