import { Article, LanguageKey } from "@/types"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { LiaLongArrowAltRightSolid } from "react-icons/lia"

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({
  article
}: ArticleCardProps) {
  const nextLocale = useLocale() as LanguageKey;
  const t = useTranslations('IndexPage');

  return (
    <Link href={`/articles/${article.id}`} className="relative w-full aspect-square md:aspect-[5/4] rounded-md overflow-hidden shadow-sm text-white bg-black">
      <Image
        alt={article.title[nextLocale]}
        src={article.image}
        className="opacity-30 z-0 object-cover object-center " 
        fill
      />
      <div className="absolute text-lg md:text-2xl top-0 bottom-0 flex flex-col justify-between p-5">
        <div className="font-tenor">{article.title[nextLocale]}</div>
        <Link href={`/articles/${article.id}`} className="opacity-100 transition-all duration-300 flex gap-2 items-center font-tenor">
          {t("read")}
          <LiaLongArrowAltRightSolid />
        </Link>
      </div>
    </Link>
  )
}