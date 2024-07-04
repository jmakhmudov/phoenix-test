import ProductsList from "@/components/ProductsList";
import { products } from "@/data";
import { useTranslation } from 'react-i18next';
import Button from "../ui/button";

export default function OurProductionSection() {
  const { t } = useTranslation("IndexPage");

  return (
    <section className="px-6 md:px-10 py-14">
      <div className="flex items-center justify-between">
        <h1 className="md:text-4xl text-3xl font-bold">{t('our_production')}</h1>

        <Button variant="bordered">Посмотреть больше</Button>
      </div>

      <div className="mt-6">
        <ProductsList products={products} />
      </div>
    </section>
  )
}

