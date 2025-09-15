import { TrophyIcon, CalendarIcon } from 'lucide-react'
import Image from 'next/image'

interface HallOfFameEntry {
  id: string
  year: number
  winnerTeam: {
    id: string
    name: string
    logoUrl?: string | null
  }
  tournament: {
    id: string
    name: string
  }
}

interface HallOfFameListProps {
  hallOfFame: HallOfFameEntry[]
}

export function HallOfFameList({ hallOfFame }: HallOfFameListProps) {
  return (
    <div className="space-y-6">
      {hallOfFame.length === 0 ? (
        <div className="text-center py-12">
          <TrophyIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">Nenhum campeão encontrado</h3>
          <p className="text-gray-500">Os campeões da Copa Ace aparecerão aqui.</p>
        </div>
      ) : (
        hallOfFame.map((entry, index) => (
          <div
            key={entry.id}
            className="bg-gray-800/50 rounded-lg border border-cyan-500/20 p-6 hover:bg-gray-800/70 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {/* Position */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <span className="text-black font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Team Info */}
                <div className="flex items-center space-x-4">
                  {entry.winnerTeam.logoUrl ? (
                    <Image
                      src={entry.winnerTeam.logoUrl}
                      alt={`Logo da ${entry.winnerTeam.name}`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400 font-bold text-2xl">
                        {entry.winnerTeam.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {entry.winnerTeam.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">
                      {entry.tournament.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Year */}
              <div className="flex items-center space-x-2 text-gray-400">
                <CalendarIcon className="w-5 h-5" />
                <span className="text-xl font-semibold">{entry.year}</span>
              </div>
            </div>

            {/* Trophy decoration */}
            <div className="mt-4 flex justify-center">
              <TrophyIcon className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        ))
      )}
    </div>
  )
}
