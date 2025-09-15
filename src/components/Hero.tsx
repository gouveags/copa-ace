import { Logo } from './Logo'

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-cyan-900/20 to-black py-20">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-6">
            Copa Ace
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A plataforma definitiva para acompanhar os melhores torneios de Counter-Strike 2
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#ranking"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Ver Classificação
            </a>
            <a
              href="/schedule"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Próximos Jogos
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
