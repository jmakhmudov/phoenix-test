import { Product } from "@/types"
import ProductCard from "./ProductCard"

interface ProductsListProps {
  products: Product[]
}

export default function ProductsList({
  products
}: ProductsListProps) {
  return (
    <div className="grid gap-6 md:gap-10 md:grid-cols-2">
      {
        products.map(product => (
          <ProductCard key={product.name + product.id} product={product} />
        ))
      }
    </div>
  )
}