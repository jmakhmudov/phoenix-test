import i18n from "@/i18n";
import { Article, LanguageKey } from "@/types";
import ArticleCard from "./ArticleCard";

interface ArticlesListProps {
  articles: Article[]
}

export default function ArticlesList({
  articles
}: ArticlesListProps) {
  const nextLocale = i18n.language as LanguageKey;

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {
        articles.map(article => (
          <ArticleCard key={article.title[nextLocale] + article.id} article={article} />
        ))
      }
    </div>
  )
}