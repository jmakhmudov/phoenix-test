'use client'

import { MainPageParallax } from '@/components/MainPageParallax';
import Button from "@/components/ui/button";
import { FiPlayCircle } from "react-icons/fi";
import { ParallaxProvider } from 'react-scroll-parallax';
import OurProductionSection from '../../components/OurProductionSection';
import UsefulArticlesSection from '../../components/UsefulArticlesSection';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('IndexPage');

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
