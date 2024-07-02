import { Product } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { LiaLongArrowAltRightSolid } from "react-icons/lia"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({
  product
}: ProductCardProps) {
  return (
    <div className="relative w-full aspect-square shadow-2xl rounded-lg overflow-hidden text-white cursor-pointer group">
      <Image
        src={product.image}
        alt={product.name}
        className="abolute object-cover object-top"
        fill
      />

      <div className="bg-green bg-opacity-30 backdrop-blur-sm pt-5 w-full md:w-2/3 absolute bottom-0 right-0 group-hover:w-full transition-all duration-300 ">
        <div className="bg-green p-4 px-6">
          <div className="flex justify-between gap-1">
            <div className="w-1 h-14 from-white to-transparent bg-gradient-radial"></div>

            <div className="w-11/12">
              <div>{product.name}</div>
              <div className="list-item ml-5 text-xs font-light opacity-50">
                <p className="line-clamp-3">{product.description}</p>
              </div>
              <Link href={'/products'} className="opacity-100 transition-all duration-300 flex gap-2 items-center font-tenor mt-2 md:opacity-0 group-hover:opacity-100">
                Узнать подробнее
                <LiaLongArrowAltRightSolid />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}