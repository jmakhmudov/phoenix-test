'use client'

import bgBot from '@/../public/bg-bot-1.png';
import bgTop from '@/../public/bg-top.png';
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import Button from '../ui/button';
import { FiPlayCircle } from 'react-icons/fi';
import { useTranslations } from 'next-intl';

export const MainPageParallax = () => {
  const t = useTranslations('IndexPage');

  const background: BannerLayer = {
    image: bgTop.src,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="px-6 md:px-10 h-3/4 pt-20 md:mt-24 font-tenor space-y-6">
        <div className="text-3xl md:text-5xl w-full md:w-2/3 font-semibold">
          {t('title').substring(0, t('title').lastIndexOf(" "))} <span className='text-green'>{t('title').split(" ").pop()}</span>
        </div>

        <div className="text-sm md:text-base w-full md:w-2/3">
          {t('description')}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 font-normal">
          <Button variant="outline" className="w-full md:w-auto">{t('contact_us')}</Button>
          <Button variant="outline" className="w-full md:w-auto">
            {t('watch_us')}
            <FiPlayCircle fill="transparent" size={18} />
          </Button>
        </div>
      </div>
    )
  };

  const foreground: BannerLayer = {
    image: bgBot.src,
    translateY: [0, 15],
    scale: [1, 1.3, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    className: 'object-cover object-top w-[100vw] absolute bottom-0 top-24'
  };

  const gradientOverlayBot: BannerLayer = {
    opacity: [0.3, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-white to-transparent top-1/3 -z-10"></div>
  };

  const gradientOverlayTop: BannerLayer = {
    opacity: [1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="bg-[#2F2F2F] bg-opacity-50 absolute top-0 bottom-0 right-0 left-0 -z-10"></div>
  };

  return (
    <ParallaxBanner
      layers={[background, foreground, gradientOverlayTop, gradientOverlayBot, headline]}
      className="h-full w-full"
    />
  );
};