import { Link } from 'react-router-dom'
import { BookOpen, Users, BarChart2, FileText, Phone, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: BookOpen,
    title: 'Ölspurwiki',
    desc: 'Unsere umfangreiche Wissensdatenbank wächst kontinuierlich. Finden Sie aktuelle Urteile, technische Normen, Fachbegriffe und Marktinformationen – strukturiert und durchsuchbar.',
    items: ['Aktuelle Rechtsprechung', 'Technische Normen & Standards', 'Fachbegriffe erklärt', 'Innovationen der Branche'],
  },
  {
    icon: Users,
    title: 'Branchennetzwerk',
    desc: 'Verbinden Sie sich mit den richtigen Partnern. Ob Dienstleister, Lieferanten oder Auftraggeber – unser Netzwerk bringt die richtigen Akteure zusammen.',
    items: ['Direktkontakte zu Mitgliedsunternehmen', 'Regionale Vernetzung', 'Geschäftspartnervermittlung', 'Community-Events'],
  },
  {
    icon: BarChart2,
    title: 'Marktinformationen',
    desc: 'Bleiben Sie informiert: Regelmäßige Berichte und Analysen zu Markttrends, Preisveränderungen und strategischen Entwicklungen in der Branche.',
    items: ['Quartalsberichte', 'Preisentwicklungen', 'Markttrend-Analysen', 'Branchennews'],
  },
  {
    icon: FileText,
    title: 'Dokumentation & Mustervorlagen',
    desc: 'Sparen Sie Zeit mit geprüften Mustervorlagen für die tägliche Arbeit – von Schadensdokumentation bis Angebotserstellung.',
    items: ['Schadensdokumentation', 'Angebotsvorlagen', 'Abrechnungsformulare', 'Prüfprotokolle'],
  },
  {
    icon: Phone,
    title: 'Persönliche Beratung',
    desc: 'Komplexe Fragen brauchen individuelle Antworten. Unsere Experten stehen für Fachberatung rund um die Ölspurbeseitigung zur Verfügung.',
    items: ['Technische Beratung', 'Rechtliche Einordnung', 'Verfahrensberatung', 'Qualitätssicherung'],
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-[#b45309] uppercase tracking-wider mb-3">Leistungen</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0d1f3c] mb-5">
              Was wir für Sie tun
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Von der Wissensvermittlung bis zur persönlichen Beratung – der Ölspurring bietet ein
              vollständiges Leistungspaket für Unternehmen der Ölspurbeseitigungsbranche.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className={`rounded-2xl border border-slate-200 p-8 lg:p-10 bg-white shadow-sm ${
                    i === 0 ? 'border-[#0d1f3c]/20' : ''
                  }`}
                >
                  <div className="grid lg:grid-cols-5 gap-8 items-start">
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#0d1f3c]/8 flex items-center justify-center flex-shrink-0">
                          <Icon size={20} className="text-[#0d1f3c]" />
                        </div>
                        <h2 className="text-xl font-bold text-[#0d1f3c]">{s.title}</h2>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <ul className="space-y-2.5">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interesse an unseren Leistungen?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Sprechen Sie uns an. Wir erklären Ihnen gerne, wie der Ölspurring Ihrem Unternehmen helfen kann.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#0d1f3c] font-bold text-sm transition-colors"
          >
            Jetzt anfragen <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
