import { Article } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { LiaLongArrowAltRightSolid } from "react-icons/lia"

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({
  article
}: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.id}`} className="relative w-full aspect-square md:aspect-[5/4] rounded-md overflow-hidden shadow-sm bg-black text-white">
      <Image
        alt={article.title}
        src={article.image}
        className="opacity-30 z-0 object-cover object-center" 
        fill
      />
      <div className="absolute text-lg md:text-2xl top-0 bottom-0 flex flex-col justify-between p-5">
        <div className="font-tenor">{article.title}</div>
        <Link href={`/articles/${article.id}`} className="opacity-100 transition-all duration-300 flex gap-2 items-center font-tenor">
          Читать
          <LiaLongArrowAltRightSolid />
        </Link>
      </div>
    </Link>
  )
}