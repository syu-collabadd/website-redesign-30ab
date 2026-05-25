import { Link } from 'react-router-dom'
import { BookOpen, Users, Shield, ArrowRight, CheckCircle, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Ölspurwiki',
    desc: 'Umfangreiche Wissensdatenbank mit aktueller Rechtsprechung, Fachbegriffen, Innovationen und Marktentwicklungen.',
    link: '/oelspurwiki',
  },
  {
    icon: Users,
    title: 'Branchennetzwerk',
    desc: 'Vernetzung mit führenden Unternehmen der Ölspurbeseitigung. Teilen Sie Erfahrungen und gewinnen Sie Geschäftspartner.',
    link: '/leistungen',
  },
  {
    icon: Shield,
    title: 'Fachkompetenz',
    desc: 'Profitieren Sie von geballtem Expertenwissen. Rechtliche Grundlagen, technische Standards und bewährte Verfahren.',
    link: '/leistungen',
  },
]

const stats = [
  { value: '15+', label: 'Jahre Erfahrung' },
  { value: '200+', label: 'Mitgliedsunternehmen' },
  { value: '1.000+', label: 'Wiki-Einträge' },
  { value: '100%', label: 'Branchenfokus' },
]

const benefits = [
  'Zugang zur größten Ölspurwiki Deutschlands',
  'Direktes Netzwerk zu Branchenexperten',
  'Aktuelle Rechtsprechung und Normen',
  'Regelmäßige Marktberichte und Analysen',
  'Technische Fachinformationen on demand',
  'Professionelle Interessenvertretung',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0d1f3c] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #2a4d84 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #b45309 0%, transparent 40%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-400 text-xs font-medium mb-6">
              <Zap size={12} />
              Die Plattform für die Ölspurbeseitigungsbranche
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Wissen teilen.<br />
              <span className="text-amber-400">Netzwerk stärken.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/75 leading-relaxed mb-8 max-w-2xl">
              Der Ölspurring ist die führende Wissens- und Kontaktplattform für Unternehmen der Ölspurbeseitigung in Deutschland.
              Wir verbinden Expertise mit Praxis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/leistungen"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#0d1f3c] font-semibold text-sm transition-colors"
              >
                Leistungen entdecken
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0d1f3c]/5 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#0d1f3c]">{s.value}</div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0d1f3c] mb-4">
              Unsere Kernleistungen
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Vom Fachwissen bis zum Branchennetzwerk – der Ölspurring bietet alles, was Ihr Unternehmen braucht.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="group p-8 rounded-2xl border border-slate-200 hover:border-[#0d1f3c]/30 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0d1f3c]/8 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#0d1f3c]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0d1f3c] mb-3">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{f.desc}</p>
                  <Link
                    to={f.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#b45309] hover:text-amber-600 transition-colors"
                  >
                    Mehr erfahren <ArrowRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#b45309] uppercase tracking-wider mb-4">
                <Globe size={13} />
                Wer wir sind
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0d1f3c] mb-5">
                Ihr Partner in der Ölspurbeseitigung
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Die Ölspurring GbR versteht sich als Dienstleister für Mitgliedsunternehmen und ihre Geschäftspartner.
                Mit Sitz in Bamberg sind wir zentral in Deutschland positioniert und bundesweit vernetzt.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Seit Jahren bündeln wir Branchenwissen, fördern den Austausch zwischen Fachunternehmen und
                entwickeln die Plattform kontinuierlich weiter – für mehr Effizienz und Qualität in der Branche.
              </p>
              <Link
                to="/ueber-uns"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0d1f3c] text-white text-sm font-semibold hover:bg-[#162d52] transition-colors"
              >
                Über uns <ArrowRight size={15} />
              </Link>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="font-semibold text-[#0d1f3c] mb-5 text-lg">Ihre Vorteile als Mitglied</h3>
              <ul className="space-y-3.5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle size={17} className="text-green-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Bereit, Teil des Netzwerks zu werden?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Nehmen Sie Kontakt auf und erfahren Sie, wie der Ölspurring Ihr Unternehmen voranbringen kann.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#0d1f3c] font-bold text-sm transition-colors"
          >
            Jetzt Kontakt aufnehmen <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
