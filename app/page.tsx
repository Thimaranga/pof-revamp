import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { BrandMarquee } from '@/components/brand-marquee';
import { FeaturedFleet } from '@/components/featured-fleet';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandMarquee />
      <FeaturedFleet />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
