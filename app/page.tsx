import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { BrandMarquee } from '@/components/brand-marquee';
import { FeaturedFleet } from '@/components/featured-fleet';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Membership } from '@/components/membership';
import { RentalPlans } from '@/components/rental-plans';
import { Chauffeur } from '@/components/chauffeur';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section
        id="home"
        className="grid min-h-[calc(100vh-5rem)] scroll-mt-20 snap-start grid-rows-[minmax(0,1fr)_auto]"
      >
        <Hero />
        <BrandMarquee />
      </section>
      <FeaturedFleet />
      <WhyChooseUs />
      <Membership />
      <RentalPlans />
      <Chauffeur />
      <Faq />
      <Footer snap />
    </main>
  );
}
