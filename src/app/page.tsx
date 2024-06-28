import Navbar from "@/components/Navbar";
import Image from "next/image";
import bgTop from '@/../public/bg-top.png';
import bgBot from '@/../public/bg-bot.png';
import Button from "@/components/ui/button";
import { FiPlayCircle } from "react-icons/fi";

export default function Home() {
  return (
    <main className="">
      <section className="h-[100vh] overflow-y-hidden relative">
        <Image
          className="w-full h-full object-bottom object-cover absolute bottom-0 -z-10"
          alt="bg"
          src={bgTop}
        />
        <Image
          className="w-full h-full object-cover object-top absolute top-1/3 -z-10"
          alt="bg"
          src={bgBot}
        />

        <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-white to-transparent top-1/3 -z-10"></div>
        <div className="bg-[#2F2F2F] bg-opacity-50 absolute top-0 bottom-0 right-0 left-0 -z-10"></div>
        <div className="bg-gradient-main absolute top-0 bottom-0 right-0 left-0 -z-10"></div>

        <Navbar />

        <div className="px-6 md:px-10 h-3/4 mt-14 md:mt-24 font-tenor space-y-6">
          <div className="text-3xl md:text-5xl w-full md:w-2/3">
            Экологически чистые продукты из богатой флоры <span className="text-[#4EB748] underline">Узбекистана</span>
          </div>

          <div className="text-sm md:text-base w-full md:w-2/3">
            Страна Шелкового пути, древней сети торговых маршрутов, была местом культурного обмена и глубоких знаний. Опираясь на богатое историческое наследие Узбекистана и стремление к инновациям, в 2018 году в самом сердце Центральной Азии было создано современное предприятие, целью которого является использование экологически чистых, натуральных местных природных богатств — цветов, листьев, кожуры, семян, корней дикорастущих лекарственных растений, фруктов и овощей
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <Button variant="outline" className="w-full md:w-auto">Связаться с нами</Button>
            <Button variant="outline" className="w-full md:w-auto">
              Смотреть о нас
              <FiPlayCircle fill="transparent" size={24}/>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
