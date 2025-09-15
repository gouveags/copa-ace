import { prisma } from '@/lib/prisma'
import { NewsList } from '@/components/NewsList'

async function getNews() {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return news
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}

export default async function NewsPage() {
  const news = await getNews()

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">Notícias</h1>
          <p className="text-gray-400">Fique por dentro das últimas novidades do mundo do Counter-Strike 2</p>
        </div>

        <NewsList news={news} />
      </div>
    </div>
  )
}
