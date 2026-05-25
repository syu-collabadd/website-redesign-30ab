import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Startseite' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/oelspurwiki', label: 'Ölspurwiki' },
  { to: '/aktuelles', label: 'Aktuelles' },
  { to: '/faq', label: 'FAQ' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#0d1f3c] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm tracking-tight">ÖR</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-[#0d1f3c] text-base tracking-tight">Ölspurring</span>
              <span className="text-xs text-slate-500 font-normal">Wissens- &amp; Kontaktplattform</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-[#b45309] bg-amber-50'
                    : 'text-slate-600 hover:text-[#0d1f3c] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="ml-3 px-4 py-2 rounded-md text-sm font-semibold bg-[#0d1f3c] text-white hover:bg-[#162d52] transition-colors"
            >
              Jetzt anfragen
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-[#0d1f3c] hover:bg-slate-100 transition-colors"
            aria-label="Menü öffnen"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-[#b45309] bg-amber-50'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="mt-2 px-4 py-3 rounded-md text-sm font-semibold bg-[#0d1f3c] text-white text-center hover:bg-[#162d52] transition-colors"
            >
              Jetzt anfragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
