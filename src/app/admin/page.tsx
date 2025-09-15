'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/verify')
        if (response.ok) {
          setIsAuthenticated(true)
        } else {
          router.push('/admin/login')
        }
      } catch {
        router.push('/admin/login')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-cyan-400 text-xl">Carregando...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">Painel Administrativo</h1>
          <p className="text-gray-400">Gerencie o conteúdo da Copa Ace</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 rounded-lg border border-cyan-500/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Times</h3>
            <p className="text-gray-400 mb-4">Gerencie as equipes participantes</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-2 rounded-md transition-colors">
              Gerenciar Times
            </button>
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-cyan-500/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Partidas</h3>
            <p className="text-gray-400 mb-4">Adicione e edite partidas</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-2 rounded-md transition-colors">
              Gerenciar Partidas
            </button>
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-cyan-500/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Notícias</h3>
            <p className="text-gray-400 mb-4">Publique notícias e anúncios</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-2 rounded-md transition-colors">
              Gerenciar Notícias
            </button>
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-cyan-500/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Patrocinadores</h3>
            <p className="text-gray-400 mb-4">Gerencie patrocinadores</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-2 rounded-md transition-colors">
              Gerenciar Patrocinadores
            </button>
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-cyan-500/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Torneios</h3>
            <p className="text-gray-400 mb-4">Crie e gerencie torneios</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-2 rounded-md transition-colors">
              Gerenciar Torneios
            </button>
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-cyan-500/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Hall da Fama</h3>
            <p className="text-gray-400 mb-4">Adicione campeões</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-2 rounded-md transition-colors">
              Gerenciar Hall da Fama
            </button>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={() => {
              // Clear auth cookie and redirect
              document.cookie = 'admin-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
              router.push('/admin/login')
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}
