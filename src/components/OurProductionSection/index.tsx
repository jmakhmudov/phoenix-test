import ProductsList from "@/components/ProductsList";
import { products } from "@/data";

export default function OurProductionSection() {
  return (
    <section className="px-6 md:px-10 py-14">
      <h1 className="md:text-4xl text-3xl font-bold">Наша продукция</h1>

      <div className="mt-6">
        <ProductsList products={products}/>
      </div>
    </section>
  )
}

