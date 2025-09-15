import { prisma } from '@/lib/prisma'
import { SponsorsList } from '@/components/SponsorsList'

async function getSponsors() {
  try {
    const sponsors = await prisma.sponsor.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })

    return sponsors
  } catch (error) {
    console.error('Error fetching sponsors:', error)
    return []
  }
}

export default async function SponsorsPage() {
  const sponsors = await getSponsors()

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">Patrocinadores</h1>
          <p className="text-gray-400">Conheça nossos parceiros que tornam a Copa Ace possível</p>
        </div>

        <SponsorsList sponsors={sponsors} />
      </div>
    </div>
  )
}
