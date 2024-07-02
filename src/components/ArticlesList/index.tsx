import { Article } from "@/types"
import ArticleCard from "./ArticleCard"

interface ArticlesListProps {
  articles: Article[]
}

export default function ArticlesList({
  articles
}: ArticlesListProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {
        articles.map(article => (
          <ArticleCard key={article.title + article.id} article={article} />
        ))
      }
    </div>
  )
}