import ArticlesList from "@/components/ArticlesList";
import { articles } from "@/data";
import { useTranslations } from "next-intl";

export default function UsefulArticlesSection() {
  const t = useTranslations("IndexPage");

  return (
    <section className="px-6 md:px-10 py-14">
      <h1 className="md:text-4xl text-3xl font-bold">{t('useful_articles')}</h1>

      <div className="mt-6">
        <ArticlesList articles={articles} />
      </div>
    </section>
  )
}