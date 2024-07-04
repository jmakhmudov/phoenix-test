'use client'

import { MainPageParallax } from "@/components/MainPageParallax";
import { ParallaxProvider } from 'react-scroll-parallax';
import OurProductionSection from '../components/OurProductionSection';
import UsefulArticlesSection from '../components/UsefulArticlesSection';

export default function Home() {

  return (
    <ParallaxProvider>
      <main className="relative">
        <section className="h-[100vh] overflow-y-hidden relative text-white">
          <MainPageParallax />
        </section>
      </main>

      <OurProductionSection />

      <UsefulArticlesSection />
    </ParallaxProvider >
  );
}
