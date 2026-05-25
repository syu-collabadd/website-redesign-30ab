import { Calendar, Tag, ArrowRight } from 'lucide-react'

const articles = [
  {
    date: '15. Mai 2025',
    cat: 'Rechtsprechung',
    title: 'Neue BGH-Entscheidung zur Kostentragung bei Ölspurbeseitigung',
    excerpt:
      'Der Bundesgerichtshof hat in einem wegweisenden Urteil (Az. VI ZR 123/24) klargestellt, unter welchen Voraussetzungen die Kosten der Ölspurbeseitigung vollständig auf den Verursacher umgelegt werden können.',
  },
  {
    date: '3. Mai 2025',
    cat: 'Technik',
    title: 'Ölbindemittel der neuen Generation: Vergleich aktueller Produkte',
    excerpt:
      'Die Wahl des richtigen Bindemittels ist entscheidend für eine effiziente und umweltschonende Ölspurbeseitigung. Wir haben sechs aktuelle Produkte unter realen Einsatzbedingungen verglichen.',
  },
  {
    date: '20. Apr. 2025',
    cat: 'Markt',
    title: 'Marktbericht Q1 2025: Stabile Preise, steigende Einsatzzahlen',
    excerpt:
      'Unser Quartalsbericht zeigt: Die Zahl der gemeldeten Ölspurvorfälle auf deutschen Straßen ist im ersten Quartal 2025 um 8 % gestiegen. Die Preise für Einsatzfahrzeuge bleiben dabei weitgehend stabil.',
  },
  {
    date: '10. Apr. 2025',
    cat: 'Netzwerk',
    title: 'Jahrestreffen 2025: Rückblick und Ausblick',
    excerpt:
      'Beim diesjährigen Mitgliedertreffen in Bamberg tauschten sich über 80 Branchenvertreter aus. Themen waren digitale Einsatzdokumentation, Nachwuchsgewinnung und die neue Datenschutz-Anforderungen.',
  },
  {
    date: '28. Mär. 2025',
    cat: 'Technik',
    title: 'Elektrische Saugfahrzeuge in der Ölspurbeseitigung – Stand 2025',
    excerpt:
      'Die ersten vollelektrischen Saugfahrzeuge kommen in der Praxis an. Wir berichten über Erfahrungen aus dem Pilotbetrieb bei drei Mitgliedsunternehmen und geben eine realistische Markteinschätzung.',
  },
  {
    date: '14. Mär. 2025',
    cat: 'Recht',
    title: 'DGUV-Vorschriften 2025: Was sich für Ölspurunternehmen ändert',
    excerpt:
      'Mit Wirkung zum 1. April 2025 treten überarbeitete DGUV-Vorschriften in Kraft, die auch Unternehmen der Ölspurbeseitigung betreffen. Wir erklären die wichtigsten Änderungen kompakt.',
  },
]

const catColor: Record<string, string> = {
  Rechtsprechung: 'text-blue-700 bg-blue-50',
  Technik: 'text-emerald-700 bg-emerald-50',
  Markt: 'text-amber-700 bg-amber-50',
  Netzwerk: 'text-purple-700 bg-purple-50',
  Recht: 'text-red-700 bg-red-50',
}

export default function News() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-[#b45309] uppercase tracking-wider mb-3">Aktuelles</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0d1f3c] mb-5">
              Neuigkeiten aus der Branche
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Bleiben Sie auf dem Laufenden: Aktuelle Nachrichten, Urteile, Marktberichte und
              Veranstaltungsrückblicke aus der Ölspurbeseitigungsbranche.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article
                key={a.title}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-[#0d1f3c]/25 hover:shadow-md transition-all overflow-hidden flex flex-col cursor-pointer"
              >
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${catColor[a.cat] ?? 'text-slate-700 bg-slate-100'}`}>
                      <Tag size={10} />
                      {a.cat}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Calendar size={11} />
                      {a.date}
                    </span>
                  </div>
                  <h2 className="font-bold text-[#0d1f3c] mb-3 leading-snug group-hover:text-[#1e3a68] transition-colors">
                    {a.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{a.excerpt}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[#b45309] group-hover:gap-2.5 transition-all">
                    Weiterlesen <ArrowRight size={14} />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              Vollständige Berichterstattung und Archive für Mitglieder.{' '}
              <a href="#/kontakt" className="text-[#b45309] font-medium hover:underline">Jetzt anfragen →</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
