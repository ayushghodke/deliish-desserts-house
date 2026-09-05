import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Menu from '@/components/sections/Menu';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Loyalty from '@/components/sections/Loyalty';
import Reservation from '@/components/sections/Reservation';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Loyalty />
      <Reservation />
      <Contact />
    </main>
  );
}
