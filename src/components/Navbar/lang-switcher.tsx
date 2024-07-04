'use client'

import i18n from "@/i18n";
import { ChangeEvent, useTransition } from "react";

export default function LangSwitcher() {
  const [isPending, startTransition] = useTransition();
  const curLocale = i18n.language;
  
  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      console.log(nextLocale);
      i18n.changeLanguage(nextLocale)
    });
  }

  return (
    <div>
      <select defaultValue={curLocale} disabled={isPending} onChange={handleLangChange} className="bg-transparent cursor-pointer">
        <option className="bg-white text-black" value="ru">Ру</option>
        <option className="bg-white text-black" value="uz">Uz</option>
        <option className="bg-white text-black" value="en">En</option>
      </select>
    </div>
  )
}