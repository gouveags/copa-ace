import { formatDate, formatTime } from '@/lib/utils'
import { CalendarIcon, ClockIcon, TrophyIcon } from 'lucide-react'

interface Match {
  id: string
  scheduledAt: Date
  scoreA?: number | null
  scoreB?: number | null
  status: string
  teamA: {
    id: string
    name: string
    logoUrl?: string | null
  }
  teamB: {
    id: string
    name: string
    logoUrl?: string | null
  }
  tournament: {
    id: string
    name: string
  }
}

interface ScheduleListProps {
  matches: Match[]
}

export function ScheduleList({ matches }: ScheduleListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE':
        return 'text-red-400 bg-red-500/10'
      case 'FINISHED':
        return 'text-green-400 bg-green-500/10'
      case 'CANCELLED':
        return 'text-gray-400 bg-gray-500/10'
      default:
        return 'text-cyan-400 bg-cyan-500/10'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'LIVE':
        return 'AO VIVO'
      case 'FINISHED':
        return 'FINALIZADO'
      case 'CANCELLED':
        return 'CANCELADO'
      default:
        return 'AGENDADO'
    }
  }

  return (
    <div className="space-y-6">
      {matches.length === 0 ? (
        <div className="text-center py-12">
          <CalendarIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">Nenhum jogo encontrado</h3>
          <p className="text-gray-500">Não há jogos agendados no momento.</p>
        </div>
      ) : (
        matches.map((match) => (
          <div
            key={match.id}
            className="bg-gray-800/50 rounded-lg border border-cyan-500/20 p-6 hover:bg-gray-800/70 transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Tournament and Status */}
              <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                <div className="flex items-center space-x-2">
                  <TrophyIcon className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-medium">{match.tournament.name}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(match.status)}`}>
                  {getStatusText(match.status)}
                </span>
              </div>

              {/* Date and Time */}
              <div className="flex items-center space-x-4 text-gray-400 mb-4 lg:mb-0">
                <div className="flex items-center space-x-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{formatDate(match.scheduledAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>{formatTime(match.scheduledAt)}</span>
                </div>
              </div>
            </div>

            {/* Teams */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-4">
                {match.teamA.logoUrl ? (
                  <img
                    src={match.teamA.logoUrl}
                    alt={`Logo da ${match.teamA.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-lg">
                      {match.teamA.name.charAt(0)}
                    </span>
                  </div>
                )}
                <span className="text-white font-semibold text-lg">{match.teamA.name}</span>
              </div>

              {/* Score or VS */}
              <div className="flex items-center space-x-4">
                {match.status === 'FINISHED' && match.scoreA !== null && match.scoreB !== null ? (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {match.scoreA} - {match.scoreB}
                    </div>
                    <div className="text-sm text-gray-400">Final</div>
                  </div>
                ) : match.status === 'LIVE' && match.scoreA !== null && match.scoreB !== null ? (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">
                      {match.scoreA} - {match.scoreB}
                    </div>
                    <div className="text-sm text-red-400">Ao Vivo</div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-xl font-bold text-cyan-400">VS</div>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-white font-semibold text-lg">{match.teamB.name}</span>
                {match.teamB.logoUrl ? (
                  <img
                    src={match.teamB.logoUrl}
                    alt={`Logo da ${match.teamB.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-lg">
                      {match.teamB.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
