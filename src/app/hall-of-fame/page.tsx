import { prisma } from '@/lib/prisma'
import { HallOfFameList } from '@/components/HallOfFameList'

async function getHallOfFame() {
  try {
    const hallOfFame = await prisma.hallOfFame.findMany({
      include: {
        winnerTeam: true,
        tournament: true
      },
      orderBy: {
        year: 'desc'
      }
    })

    return hallOfFame
  } catch (error) {
    console.error('Error fetching hall of fame:', error)
    return []
  }
}

export default async function HallOfFamePage() {
  const hallOfFame = await getHallOfFame()

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">Hall da Fama</h1>
          <p className="text-gray-400">Conheça os campeões que fizeram história na Copa Ace</p>
        </div>

        <HallOfFameList hallOfFame={hallOfFame} />
      </div>
    </div>
  )
}
