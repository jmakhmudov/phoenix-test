import i18n from "@/i18n";
import { LanguageKey, Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: Product[]
}

export default function ProductsList({
  products
}: ProductsListProps) {
  const nextLocale = i18n.language as LanguageKey;

  return (
    <div className="grid gap-6 md:gap-10 md:grid-cols-3">
      {
        products.map(product => (
          <ProductCard key={product.name[nextLocale] + product.id} product={product} />
        ))
      }
    </div>
  )
}