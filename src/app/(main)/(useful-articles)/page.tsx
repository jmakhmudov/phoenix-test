import ArticlesList from "@/components/ArticlesList";
import { articles } from "@/data";

export default function UsefulArticlesSection() {
  return (
    <section className="px-6 md:px-10 py-14">
      <h1 className="md:text-4xl text-3xl font-bold">Полезные статьи</h1>

      <div className="mt-6">
        <ArticlesList articles={articles} />
      </div>
    </section>
  )
}