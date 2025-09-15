import { ExternalLinkIcon, HeartIcon } from 'lucide-react'

interface Sponsor {
  id: string
  name: string
  logoUrl: string
  websiteUrl?: string | null
}

interface SponsorsListProps {
  sponsors: Sponsor[]
}

export function SponsorsList({ sponsors }: SponsorsListProps) {
  return (
    <div>
      {sponsors.length === 0 ? (
        <div className="text-center py-12">
          <HeartIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">Nenhum patrocinador encontrado</h3>
          <p className="text-gray-500">Nossos patrocinadores aparecerão aqui em breve.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-gray-800/50 rounded-lg border border-cyan-500/20 p-6 hover:bg-gray-800/70 transition-colors group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img
                    src={sponsor.logoUrl}
                    alt={`Logo da ${sponsor.name}`}
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {sponsor.name}
                </h3>

                {sponsor.websiteUrl && (
                  <a
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Visitar site</span>
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
