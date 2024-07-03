import { LanguageKey, Product } from "@/types"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { LiaLongArrowAltRightSolid } from "react-icons/lia"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({
  product
}: ProductCardProps) {
  const nextLocale = useLocale() as LanguageKey;
  const t = useTranslations("IndexPage");

  return (
    <div className="relative w-full aspect-square shadow-2xl rounded-lg overflow-hidden text-white cursor-pointer group">
      <Image
        src={product.image}
        alt={product.name[nextLocale]}
        className="abolute object-cover object-top"
        fill
      />

      <div className="bg-green bg-opacity-30 backdrop-blur-sm pt-5 w-full md:w-2/3 absolute bottom-0 right-0 group-hover:w-full transition-all duration-500 h-40">
        <div className="bg-green p-4 px-6 h-full">
          <div className="flex justify-between gap-1">
            <div className="w-1 h-14 from-white to-transparent bg-gradient-radial"></div>

            <div className="w-11/12">
              <div className="line-clamp-1">{product.name[nextLocale]}</div>
              <div className="list-item ml-5 text-xs font-light opacity-50">
                <p className="line-clamp-3 w-40">{product.description[nextLocale]}</p>
              </div>

              <Link href={'/products'} className="opacity-100 transition-all duration-500 flex gap-2 items-center font-tenor mt-2 md:opacity-0 group-hover:opacity-100">
                {t('learn_more')}
                <LiaLongArrowAltRightSolid />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}