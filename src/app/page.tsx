import { prisma } from '@/lib/prisma'
import { RankingTable } from '@/components/RankingTable'
import { Hero } from '@/components/Hero'

async function getTeams() {
  try {
    const teams = await prisma.team.findMany({
      include: {
        matchesAsTeamA: {
          where: {
            status: 'FINISHED'
          }
        },
        matchesAsTeamB: {
          where: {
            status: 'FINISHED'
          }
        }
      }
    })

    // Calculate points, wins, and losses for each team
    const teamsWithStats = teams.map(team => {
      const allMatches = [...team.matchesAsTeamA, ...team.matchesAsTeamB]
      const wins = allMatches.filter(match => {
        if (match.teamAId === team.id) {
          return match.scoreA && match.scoreB && match.scoreA > match.scoreB
        } else {
          return match.scoreA && match.scoreB && match.scoreB > match.scoreA
        }
      }).length

      const losses = allMatches.filter(match => {
        if (match.teamAId === team.id) {
          return match.scoreA && match.scoreB && match.scoreA < match.scoreB
        } else {
          return match.scoreA && match.scoreB && match.scoreB < match.scoreA
        }
      }).length

      const points = wins * 3 // 3 points per win

      return {
        ...team,
        wins,
        losses,
        points,
        matchesPlayed: allMatches.length
      }
    })

    // Sort by points (descending), then by wins (descending)
    return teamsWithStats.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points
      return b.wins - a.wins
    })
  } catch (error) {
    console.error('Error fetching teams:', error)
    return []
  }
}

export default async function HomePage() {
  const teams = await getTeams()

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">Classificação</h1>
          <p className="text-gray-400">Acompanhe o ranking das equipes no torneio atual</p>
        </div>

        <RankingTable teams={teams} />
      </div>
    </div>
  )
}