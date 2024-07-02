'use client'

import logo from "@/../public/logo.png";
import logo2 from "@/../public/logo-2.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className=" text-white w-[100dvw] bg-[#231E1E] px-6 py-8 pb-10 md:px-10 flex md:flex-row justify-between flex-col gap-y-6 text-center md:text-left relative">
      <Image
        alt="logo"
        src={logo2}
        className="absolute top-1/2 right-10 w-32 mix-blend-color-dodge md:top-4 md:right-1/3 md:w-40"
      />

      <Link href={'/'} className="order-last md:order-first grid place-items-center md:place-items-start">
        <Image
          className="w-24 md:w-[10vw]"
          alt="logo"
          src={logo}
        />
      </Link>

      <section className="md:text-sm font-normal w-full md:w-96 space-y-4 text-xs">
        <div className="md:space-y-4 space-y-2">
          <div>Адрес головного офиса:</div>
          <div>100100, Республика Узбекистан, город Ташкент, Яккасарайский район, улица Шота Руставели, 53Б</div>
        </div>

        <div className="md:space-y-4 space-y-2">
          <div>Адрес производства:</div>
          <div>111305, Республика Узбекистан, Ташкентская область, Паркентский район, Каракалпакский Марказий МФУ</div>
        </div>
      </section>

      <Links pathname={pathname} className="order-first md:order-none text-lg md:text-sm" />

      <section className="md:space-y-3 space-y-2 text-sm">
        <div className="mb-1">Как с нами связаться?</div>
        <div>info@yumabio.com</div>
        <div>+998 95 478 88 87</div>
        <div>+998 93 321 24 42</div>
        <div className="flex items-center justify-center md:justify-start gap-3">
          <Link target="_blank" href={'instagram.com'}><RiInstagramFill size={18} /></Link>
          <Link target="_blank" href={'instagram.com'}><FaFacebook size={18} /></Link>
          <Link target="_blank" href={'instagram.com'}><FaTelegram size={18} /></Link>
        </div>
      </section>
    </footer>
  )
}


function Links({
  pathname,
  className
}: { pathname: string, className?: string }) {

  return (
    <div className={`grid gap-3 ${className}`}>
      <Link
        data-onpage={pathname === '/'}
        href={'/'}
        className="hover:underline transition-all duration-150 data-[onpage=true]:underline"
      >
        Главная
      </Link>
      <Link
        data-onpage={pathname === '/about'}
        href={'/about'}
        className="hover:underline transition-all duration-150 data-[onpage=true]:underline"
      >
        О нас
      </Link>
      <Link
        data-onpage={pathname === '/products'}
        href={'/products'}
        className="hover:underline transition-all duration-150 data-[onpage=true]:underline"
      >
        Продукты
      </Link>
      <Link
        data-onpage={pathname === '/contacts'}
        href={'/contacts'}
        className="hover:underline transition-all duration-150 data-[onpage=true]:underline"
      >
        Контакты
      </Link>
      <Link
        data-onpage={pathname === '/news'}
        href={'/news'}
        className="hover:underline transition-all duration-150 data-[onpage=true]:underline"
      >
        Новости
      </Link>
    </div>
  )
}