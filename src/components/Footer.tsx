import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0d1f3c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">ÖR</span>
              </div>
              <div>
                <div className="font-bold text-white">Ölspurring</div>
                <div className="text-xs text-white/60">GbR · Bamberg</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Die führende Wissens- und Kontaktplattform für Unternehmen der Ölspurbeseitigung in Deutschland.
              Wir verbinden Experten, bündeln Wissen und stärken die Branche.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Startseite' },
                { to: '/ueber-uns', label: 'Über uns' },
                { to: '/leistungen', label: 'Leistungen' },
                { to: '/oelspurwiki', label: 'Ölspurwiki' },
                { to: '/aktuelles', label: 'Aktuelles' },
                { to: '/faq', label: 'FAQ' },
                { to: '/kontakt', label: 'Kontakt' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-amber-400" />
                <span>Bamberg, Deutschland</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone size={15} className="flex-shrink-0 text-amber-400" />
                <a href="tel:+49" className="text-white/70 hover:text-white transition-colors">
                  Auf Anfrage
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail size={15} className="flex-shrink-0 text-amber-400" />
                <a href="#/kontakt" className="text-white/70 hover:text-white transition-colors">
                  Kontaktformular
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Ölspurring GbR. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-5">
            <Link to="/impressum" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
