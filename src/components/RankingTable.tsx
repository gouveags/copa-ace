'use client'

import { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react'

interface Team {
  id: string
  name: string
  logoUrl?: string | null
  region: string
  wins: number
  losses: number
  points: number
  matchesPlayed: number
}

interface RankingTableProps {
  teams: Team[]
}

type SortField = 'points' | 'wins' | 'losses' | 'matchesPlayed'
type SortDirection = 'asc' | 'desc'

export function RankingTable({ teams }: RankingTableProps) {
  const [sortField, setSortField] = useState<SortField>('points')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('desc')
    }
  }

  const sortedTeams = [...teams].sort((a, b) => {
    const aValue = a[sortField]
    const bValue = b[sortField]

    if (sortDirection === 'asc') {
      return aValue - bValue
    } else {
      return bValue - aValue
    }
  })

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null

    return sortDirection === 'asc' ? (
      <ChevronUpIcon className="w-4 h-4" />
    ) : (
      <ChevronDownIcon className="w-4 h-4" />
    )
  }

  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-cyan-500/20">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-cyan-500/10">
            <tr>
              <th className="px-6 py-4 text-left text-cyan-400 font-semibold">
                Posição
              </th>
              <th className="px-6 py-4 text-left text-cyan-400 font-semibold">
                Equipe
              </th>
              <th className="px-6 py-4 text-left text-cyan-400 font-semibold">
                Região
              </th>
              <th
                className="px-6 py-4 text-left text-cyan-400 font-semibold cursor-pointer hover:bg-cyan-500/5 transition-colors"
                onClick={() => handleSort('points')}
              >
                <div className="flex items-center space-x-1">
                  <span>Pontos</span>
                  {getSortIcon('points')}
                </div>
              </th>
              <th
                className="px-6 py-4 text-left text-cyan-400 font-semibold cursor-pointer hover:bg-cyan-500/5 transition-colors"
                onClick={() => handleSort('wins')}
              >
                <div className="flex items-center space-x-1">
                  <span>Vitórias</span>
                  {getSortIcon('wins')}
                </div>
              </th>
              <th
                className="px-6 py-4 text-left text-cyan-400 font-semibold cursor-pointer hover:bg-cyan-500/5 transition-colors"
                onClick={() => handleSort('losses')}
              >
                <div className="flex items-center space-x-1">
                  <span>Derrotas</span>
                  {getSortIcon('losses')}
                </div>
              </th>
              <th
                className="px-6 py-4 text-left text-cyan-400 font-semibold cursor-pointer hover:bg-cyan-500/5 transition-colors"
                onClick={() => handleSort('matchesPlayed')}
              >
                <div className="flex items-center space-x-1">
                  <span>Jogos</span>
                  {getSortIcon('matchesPlayed')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-500/10">
            {sortedTeams.map((team, index) => (
              <tr key={team.id} className="hover:bg-cyan-500/5 transition-colors">
                <td className="px-6 py-4 text-gray-300 font-medium">
                  {index + 1}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    {team.logoUrl ? (
                      <img
                        src={team.logoUrl}
                        alt={`Logo da ${team.name}`}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 font-bold text-sm">
                          {team.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="text-white font-medium">{team.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {team.region}
                </td>
                <td className="px-6 py-4 text-cyan-400 font-semibold">
                  {team.points}
                </td>
                <td className="px-6 py-4 text-green-400">
                  {team.wins}
                </td>
                <td className="px-6 py-4 text-red-400">
                  {team.losses}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {team.matchesPlayed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
