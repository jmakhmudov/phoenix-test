'use client'

import { useLocale } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react"

export default function LangSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const curLocale = useLocale();
  const pathname = usePathname();
  const params = useParams();

  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextLocale}`)
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