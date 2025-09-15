import { formatDate } from '@/lib/utils'
import { NewspaperIcon, UserIcon } from 'lucide-react'

interface News {
  id: string
  title: string
  content: string
  author: string
  createdAt: Date
}

interface NewsListProps {
  news: News[]
}

export function NewsList({ news }: NewsListProps) {
  return (
    <div className="space-y-6">
      {news.length === 0 ? (
        <div className="text-center py-12">
          <NewspaperIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">Nenhuma notícia encontrada</h3>
          <p className="text-gray-500">Não há notícias publicadas no momento.</p>
        </div>
      ) : (
        news.map((article) => (
          <article
            key={article.id}
            className="bg-gray-800/50 rounded-lg border border-cyan-500/20 p-6 hover:bg-gray-800/70 transition-colors"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                {article.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <UserIcon className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <span>•</span>
                <span>{formatDate(article.createdAt)}</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                {article.content.length > 200
                  ? `${article.content.substring(0, 200)}...`
                  : article.content
                }
              </p>
            </div>

            {article.content.length > 200 && (
              <button className="mt-4 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                Ler mais
              </button>
            )}
          </article>
        ))
      )}
    </div>
  )
}
