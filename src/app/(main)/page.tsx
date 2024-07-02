'use client'

import { MainPageParallax } from '@/components/MainPageParallax';
import Button from "@/components/ui/button";
import { FiPlayCircle } from "react-icons/fi";
import { ParallaxProvider } from 'react-scroll-parallax';
import OurProductionSection from './(our-production)/page';
import UsefulArticlesSection from './(useful-articles)/page';

export default function Home() {

  return (
    <ParallaxProvider>
      <main className="relative">
        <section className="h-[100vh] overflow-y-hidden relative text-white">
          <MainPageParallax />
          <div className="px-6 md:px-10 h-3/4 mt-14 md:mt-24 font-tenor space-y-6 z-50">
            <div className="text-3xl md:text-5xl w-full md:w-2/3 font-semibold">
              Экологически чистые продукты из богатой флоры <span className="text-[#4EB748]">Узбекистана</span>
            </div>

            <div className="text-sm md:text-base w-full md:w-2/3">
              Страна Шелкового пути, древней сети торговых маршрутов, была местом культурного обмена и глубоких знаний. Опираясь на богатое историческое наследие Узбекистана и стремление к инновациям, в 2018 году в самом сердце Центральной Азии было создано современное предприятие, целью которого является использование экологически чистых, натуральных местных природных богатств — цветов, листьев, кожуры, семян, корней дикорастущих лекарственных растений, фруктов и овощей
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <Button variant="outline" className="w-full md:w-auto">Связаться с нами</Button>
              <Button variant="outline" className="w-full md:w-auto">
                Смотреть о нас
                <FiPlayCircle fill="transparent" size={24} />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <OurProductionSection />

      <UsefulArticlesSection />
    </ParallaxProvider >
  );
}
