import Link from 'next/link'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Logo size="md" />
              <span className="text-2xl font-bold text-cyan-400">Copa Ace</span>
            </div>
            <p className="text-gray-400 max-w-md">
              A plataforma definitiva para acompanhar torneios de Counter-Strike 2.
              Classificações, agendas, notícias e muito mais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Classificação</Link></li>
              <li><Link href="/schedule" className="text-gray-400 hover:text-cyan-400 transition-colors">Agenda</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-cyan-400 transition-colors">Notícias</Link></li>
              <li><Link href="/hall-of-fame" className="text-gray-400 hover:text-cyan-400 transition-colors">Hall da Fama</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">contato@copaace.com</li>
              <li className="text-gray-400">@copaace</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Copa Ace. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
