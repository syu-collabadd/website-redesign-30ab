import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'Was ist der Ölspurring?',
    a: 'Der Ölspurring ist eine Wissens- und Kontaktplattform für Unternehmen der Ölspurbeseitigung in Deutschland. Wir betreiben das Ölspurwiki, vernetzen Branchenunternehmen und stellen aktuelle Fachinformationen bereit.',
  },
  {
    q: 'Für wen ist der Ölspurring gedacht?',
    a: 'Primär für Unternehmen, die gewerblich Ölspuren auf Straßen, Parkplätzen und anderen Flächen beseitigen – also Straßenreinigungsfirmen, Bergungsunternehmen, Feuerwehr-Dienstleister und deren Zulieferer.',
  },
  {
    q: 'Was enthält das Ölspurwiki?',
    a: 'Das Ölspurwiki umfasst derzeit über 950 Einträge zu Rechtsprechung (BGH, OLG, LG-Urteile), technischen Normen (DIN, DGUV), Fachbegriffen, Bindemittelvergleichen, Marktberichten und aktuellen Branchennews. Der Bestand wächst kontinuierlich.',
  },
  {
    q: 'Wie werde ich Mitglied?',
    a: 'Nehmen Sie einfach Kontakt zu uns auf – über unser Kontaktformular oder per E-Mail. Wir informieren Sie über die Mitgliedschaftsvoraussetzungen und -konditionen und melden uns in der Regel innerhalb von 24 Stunden.',
  },
  {
    q: 'Ist der Ölspurring auch für Einzelpersonen zugänglich?',
    a: 'Grundsätzlich richten wir uns an Unternehmen und Gewerbetreibende. Einzelne Fachleute, Gutachter oder Juristen können jedoch ebenfalls Kontakt aufnehmen – wir prüfen jeden Antrag individuell.',
  },
  {
    q: 'Welche Kosten entstehen für eine Mitgliedschaft?',
    a: 'Die genauen Konditionen kommunizieren wir im persönlichen Gespräch, da wir maßgeschneiderte Mitgliedschaftsmodelle anbieten. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.',
  },
  {
    q: 'Bietet der Ölspurring auch persönliche Beratung an?',
    a: 'Ja. Mitglieder können unsere Experten direkt kontaktieren – bei technischen Fragen, zur Einordnung von Rechtssituationen oder für strategische Branchenfragen. Der Umfang der Beratung richtet sich nach dem jeweiligen Mitgliedschaftsmodell.',
  },
  {
    q: 'Wie aktuell sind die Informationen im Wiki?',
    a: 'Wir aktualisieren das Wiki kontinuierlich. Neue Urteile, Normen und Marktberichte werden in der Regel innerhalb weniger Wochen nach Veröffentlichung eingearbeitet. Mitglieder können auf den vollständigen, immer aktuellen Bestand zugreifen.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-[#0d1f3c] leading-snug">{q}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-slate-400 transition-transform mt-0.5 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 pr-10">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-[#b45309] uppercase tracking-wider mb-3">FAQ</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0d1f3c] mb-5">
              Häufige Fragen
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Antworten auf die häufigsten Fragen zum Ölspurring, unseren Leistungen und der Mitgliedschaft.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Ihre Frage war nicht dabei?</p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0d1f3c] text-white text-sm font-semibold hover:bg-[#162d52] transition-colors"
            >
              Direkt anfragen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
