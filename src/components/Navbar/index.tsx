'use client'

import logo from "@/../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav data-menuisopen={menuIsOpen} className="flex items-center justify-between px-6 py-2 md:px-10">
      <Image
        className="w-24 md:w-[10vw]"
        alt="logo"
        src={logo}
      />

      <div className="md:flex items-center gap-8 hidden">
        <div className="flex items-center gap-8 list-none">
          <Links pathname={pathname} />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 border border-white px-3 py-2 rounded-full">
            <CiSearch size={24} />
            <input
              placeholder="Поиск..."
              className="bg-transparent outline-none font-gilroy font-medium"
              type="text"
              name="search"
              id="search"
            />
          </div>

          <div className="flex items-center cursor-pointer">
            <div>Ру</div>
            <MdOutlineKeyboardArrowDown size={24} />
          </div>
        </div>
      </div>

      {
        menuIsOpen ?
          <IoClose className="cursor-pointer md:hidden z-10" onClick={() => setMenuIsOpen(false)} size={24} />
          : <FiMenu className="cursor-pointer md:hidden" onClick={() => setMenuIsOpen(true)} size={24} />
      }
      <div data-menuisopen={menuIsOpen} className="bg-black bg-opacity-10 backdrop-blur-md hidden data-[menuisopen=true]:block absolute pt-20 px-6 md:px-10 top-0 bottom-0 right-0 left-0 !md:hidden">
        <div className="grid gap-4 text-lg text-center">
          <Links pathname={pathname} />
        </div>
      </div>
    </nav>
  )
}

function Links({
  pathname
}: { pathname: string }) {

  return (
    <>
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
    </>
  )
}