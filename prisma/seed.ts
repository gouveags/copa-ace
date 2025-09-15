import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../src/lib/auth'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@copaace.com' },
    update: {},
    create: {
      email: 'admin@copaace.com',
      passwordHash: await hashPassword('admin123'),
      role: 'ADMIN'
    }
  })

  console.log('✅ Usuário admin criado:', adminUser.email)

  // Create teams
  const teams = await Promise.all([
    prisma.team.upsert({
      where: { name: 'FURIA' },
      update: {},
      create: {
        name: 'FURIA',
        region: 'Brasil',
        logoUrl: 'https://img-cdn.hltv.org/teamlogo/9215.png'
      }
    }),
    prisma.team.upsert({
      where: { name: 'Liquid' },
      update: {},
      create: {
        name: 'Liquid',
        region: 'América do Norte',
        logoUrl: 'https://img-cdn.hltv.org/teamlogo/5973.png'
      }
    }),
    prisma.team.upsert({
      where: { name: 'NAVI' },
      update: {},
      create: {
        name: 'NAVI',
        region: 'Europa',
        logoUrl: 'https://img-cdn.hltv.org/teamlogo/4608.png'
      }
    }),
    prisma.team.upsert({
      where: { name: 'G2' },
      update: {},
      create: {
        name: 'G2',
        region: 'Europa',
        logoUrl: 'https://img-cdn.hltv.org/teamlogo/5995.png'
      }
    }),
    prisma.team.upsert({
      where: { name: 'Astralis' },
      update: {},
      create: {
        name: 'Astralis',
        region: 'Europa',
        logoUrl: 'https://img-cdn.hltv.org/teamlogo/6665.png'
      }
    }),
    prisma.team.upsert({
      where: { name: 'Vitality' },
      update: {},
      create: {
        name: 'Vitality',
        region: 'Europa',
        logoUrl: 'https://img-cdn.hltv.org/teamlogo/9565.png'
      }
    })
  ])

  console.log('✅ Times criados:', teams.length)

  // Create tournament
  const tournament = await prisma.tournament.upsert({
    where: { name: 'Copa Ace 2024' },
    update: {},
    create: {
      name: 'Copa Ace 2024',
      startDate: new Date('2024-01-15'),
      endDate: new Date('2024-03-15')
    }
  })

  console.log('✅ Torneio criado:', tournament.name)

  // Create matches
  const matches = await Promise.all([
    prisma.match.upsert({
      where: { id: 'match-1' },
      update: {},
      create: {
        id: 'match-1',
        tournamentId: tournament.id,
        teamAId: teams[0].id, // FURIA
        teamBId: teams[1].id, // Liquid
        scheduledAt: new Date('2024-02-15T20:00:00Z'),
        scoreA: 16,
        scoreB: 14,
        status: 'FINISHED'
      }
    }),
    prisma.match.upsert({
      where: { id: 'match-2' },
      update: {},
      create: {
        id: 'match-2',
        tournamentId: tournament.id,
        teamAId: teams[2].id, // NAVI
        teamBId: teams[3].id, // G2
        scheduledAt: new Date('2024-02-16T18:00:00Z'),
        scoreA: 12,
        scoreB: 16,
        status: 'FINISHED'
      }
    }),
    prisma.match.upsert({
      where: { id: 'match-3' },
      update: {},
      create: {
        id: 'match-3',
        tournamentId: tournament.id,
        teamAId: teams[4].id, // Astralis
        teamBId: teams[5].id, // Vitality
        scheduledAt: new Date('2024-02-20T19:00:00Z'),
        status: 'SCHEDULED'
      }
    }),
    prisma.match.upsert({
      where: { id: 'match-4' },
      update: {},
      create: {
        id: 'match-4',
        tournamentId: tournament.id,
        teamAId: teams[0].id, // FURIA
        teamBId: teams[2].id, // NAVI
        scheduledAt: new Date('2024-02-22T21:00:00Z'),
        status: 'LIVE'
      }
    })
  ])

  console.log('✅ Partidas criadas:', matches.length)

  // Create news
  const news = await Promise.all([
    prisma.news.upsert({
      where: { id: 'news-1' },
      update: {},
      create: {
        id: 'news-1',
        title: 'FURIA vence Liquid em partida emocionante',
        content: 'A equipe brasileira FURIA conseguiu uma vitória importante contra a Liquid por 16-14, em uma partida que durou mais de 2 horas. O mapa escolhido foi Mirage, onde a FURIA mostrou grande controle tático e individualidade dos jogadores.',
        author: 'Redação Copa Ace'
      }
    }),
    prisma.news.upsert({
      where: { id: 'news-2' },
      update: {},
      create: {
        id: 'news-2',
        title: 'G2 domina NAVI e avança para próxima fase',
        content: 'A equipe europeia G2 mostrou superioridade contra a NAVI, vencendo por 16-12. Com essa vitória, a G2 garante sua classificação para a próxima fase do torneio, enquanto a NAVI terá que lutar na repescagem.',
        author: 'Redação Copa Ace'
      }
    }),
    prisma.news.upsert({
      where: { id: 'news-3' },
      update: {},
      create: {
        id: 'news-3',
        title: 'Próxima rodada promete grandes confrontos',
        content: 'A próxima rodada do torneio promete ser emocionante, com confrontos diretos entre as melhores equipes do mundo. Astralis vs Vitality e FURIA vs NAVI são os jogos mais aguardados pelos fãs.',
        author: 'Redação Copa Ace'
      }
    })
  ])

  console.log('✅ Notícias criadas:', news.length)

  // Create sponsors
  const sponsors = await Promise.all([
    prisma.sponsor.upsert({
      where: { name: 'Red Bull' },
      update: {},
      create: {
        name: 'Red Bull',
        logoUrl: 'https://logos-world.net/wp-content/uploads/2020/09/Red-Bull-Logo.png',
        websiteUrl: 'https://www.redbull.com'
      }
    }),
    prisma.sponsor.upsert({
      where: { name: 'Intel' },
      update: {},
      create: {
        name: 'Intel',
        logoUrl: 'https://logos-world.net/wp-content/uploads/2020/09/Intel-Logo.png',
        websiteUrl: 'https://www.intel.com'
      }
    }),
    prisma.sponsor.upsert({
      where: { name: 'SteelSeries' },
      update: {},
      create: {
        name: 'SteelSeries',
        logoUrl: 'https://logos-world.net/wp-content/uploads/2020/09/SteelSeries-Logo.png',
        websiteUrl: 'https://steelseries.com'
      }
    })
  ])

  console.log('✅ Patrocinadores criados:', sponsors.length)

  // Create hall of fame
  const hallOfFame = await Promise.all([
    prisma.hallOfFame.upsert({
      where: { id: 'hof-1' },
      update: {},
      create: {
        id: 'hof-1',
        year: 2023,
        tournamentId: tournament.id,
        winnerTeamId: teams[0].id // FURIA
      }
    }),
    prisma.hallOfFame.upsert({
      where: { id: 'hof-2' },
      update: {},
      create: {
        id: 'hof-2',
        year: 2022,
        tournamentId: tournament.id,
        winnerTeamId: teams[2].id // NAVI
      }
    })
  ])

  console.log('✅ Hall da Fama criado:', hallOfFame.length)

  console.log('🎉 Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
