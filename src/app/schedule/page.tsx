import { prisma } from '@/lib/prisma'
import { ScheduleList } from '@/components/ScheduleList'

async function getMatches() {
  try {
    const matches = await prisma.match.findMany({
      include: {
        teamA: true,
        teamB: true,
        tournament: true
      },
      orderBy: {
        scheduledAt: 'asc'
      }
    })

    return matches
  } catch (error) {
    console.error('Error fetching matches:', error)
    return []
  }
}

export default async function SchedulePage() {
  const matches = await getMatches()

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">Agenda de Jogos</h1>
          <p className="text-gray-400">Acompanhe os próximos jogos e resultados</p>
        </div>

        <ScheduleList matches={matches} />
      </div>
    </div>
  )
}
