import { Search, BookOpen, Scale, Wrench, TrendingUp, ChevronRight } from 'lucide-react'

const categories = [
  {
    icon: Scale,
    title: 'Rechtsprechung',
    count: '250+',
    desc: 'Aktuelle Gerichtsurteile, OLG-Entscheidungen und BGH-Rechtsprechung zur Ölspurhaftung und -beseitigung.',
    tags: ['Haftungsrecht', 'Schadensersatz', 'Versicherungsrecht', 'Öffentliches Recht'],
  },
  {
    icon: Wrench,
    title: 'Technik & Normen',
    count: '180+',
    desc: 'Technische Standards, DIN-Normen, Verfahrensbeschreibungen und aktuelle Technologien der Ölspurbeseitigung.',
    tags: ['DIN-Normen', 'Bindemittel', 'Absaugung', 'Reinigungsverfahren'],
  },
  {
    icon: BookOpen,
    title: 'Fachbegriffe',
    count: '400+',
    desc: 'Kompaktes Glossar aller wichtigen Fachbegriffe – von A wie Adsorbenz bis Z wie Zersetzung.',
    tags: ['Glossar', 'Definitionen', 'Abkürzungen', 'Normbegriffe'],
  },
  {
    icon: TrendingUp,
    title: 'Markt & Branche',
    count: '120+',
    desc: 'Marktberichte, Preisentwicklungen, Branchennews und strategische Analysen für Ihr Unternehmen.',
    tags: ['Marktdaten', 'Preise', 'Trends', 'Wettbewerb'],
  },
]

const recentEntries = [
  { cat: 'Rechtsprechung', title: 'BGH-Urteil zur Haftungsquote bei Ölspuren auf öffentlichen Straßen', date: 'Mai 2025' },
  { cat: 'Technik', title: 'Neue DIN-Norm für Ölbindemittel: Was Betriebe beachten müssen', date: 'Apr. 2025' },
  { cat: 'Markt', title: 'Quartalsmarktbericht Q1 2025: Preisentwicklung Saugfahrzeuge', date: 'Apr. 2025' },
  { cat: 'Fachbegriff', title: 'Flockulierung – Verfahren zur Ölabscheidung erklärt', date: 'Mär. 2025' },
  { cat: 'Rechtsprechung', title: 'OLG Frankfurt: Subunternehmer-Haftung bei fehlerhafter Reinigung', date: 'Mär. 2025' },
]

export default function Wiki() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d1f3c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">Ölspurwiki</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-5">
              Das Wissenszentrum<br />der Branche
            </h1>
            <p className="text-xl text-white/75 leading-relaxed mb-8">
              Über 950 Facheinträge zu Rechtsprechung, Technik, Normung und Marktentwicklung –
              ständig aktualisiert von Branchenexperten.
            </p>
            {/* Search bar (visual only) */}
            <div className="relative max-w-xl">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Suchbegriff eingeben, z.B. Haftungsrecht, DIN 14011 ..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-[#0d1f3c] text-white text-sm font-semibold hover:bg-[#162d52] transition-colors">
                Suchen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0d1f3c] mb-8">Kategorien</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.title}
                  className="group p-7 rounded-2xl border border-slate-200 hover:border-[#0d1f3c]/30 hover:shadow-md transition-all bg-white cursor-pointer"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0d1f3c]/8 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[#0d1f3c]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-[#0d1f3c] text-lg">{cat.title}</h3>
                        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                          {cat.count} Einträge
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">{cat.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.tags.map((tag) => (
                          <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent entries */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0d1f3c]">Neueste Einträge</h2>
            <span className="text-sm text-slate-500">Zuletzt aktualisiert: Mai 2025</span>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-sm overflow-hidden">
            {recentEntries.map((entry) => (
              <div key={entry.title} className="flex items-center gap-4 px-6 py-5 hover:bg-slate-50 transition-colors cursor-pointer group">
                <span className="text-xs font-semibold text-[#b45309] bg-amber-50 px-2.5 py-1 rounded-full flex-shrink-0 w-28 text-center">
                  {entry.cat}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#0d1f3c] text-sm group-hover:text-[#b45309] transition-colors line-clamp-1">
                    {entry.title}
                  </p>
                </div>
                <span className="text-xs text-slate-400 flex-shrink-0">{entry.date}</span>
                <ChevronRight size={16} className="text-slate-300 group-hover:text-[#b45309] transition-colors flex-shrink-0" />
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-slate-500 text-sm">
              Vollständiger Wiki-Zugang für Mitglieder. <a href="#/kontakt" className="text-[#b45309] font-medium hover:underline">Mitglied werden →</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
