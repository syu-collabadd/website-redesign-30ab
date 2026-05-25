import { Link } from 'react-router-dom'
import { Target, Heart, Handshake, ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Fokus & Expertise',
    desc: 'Wir konzentrieren uns vollständig auf die Ölspurbeseitigung – das macht uns zum Spezialisten, nicht zum Generalisten.',
  },
  {
    icon: Heart,
    title: 'Leidenschaft',
    desc: 'Unsere Arbeit ist getrieben von echtem Interesse an der Branche und dem Wunsch, sie voranzubringen.',
  },
  {
    icon: Handshake,
    title: 'Partnerschaft',
    desc: 'Wir sind Dienstleister – Ihr Erfolg ist unser Erfolg. Langfristige Beziehungen sind unser Fundament.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-[#b45309] uppercase tracking-wider mb-3">Über uns</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0d1f3c] mb-5">
              Wir sind der Ölspurring
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Die Wissens- und Kontaktplattform für Unternehmen der Ölspurbeseitigung in Deutschland –
              gegründet von Branchenprofis, für Branchenprofis.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d1f3c] mb-5">Unsere Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Die Ölspurring GbR wurde gegründet mit dem klaren Ziel: die Ölspurbeseitigungsbranche in Deutschland zu vernetzen,
                zu stärken und ihr gebündeltes Wissen zugänglich zu machen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Wir verstehen uns in erster Linie als Dienstleister für unsere Mitgliedsunternehmen und ihre Geschäftspartner.
                Das bedeutet: Wir sind da, wenn Sie uns brauchen – ob für Fachinformationen, Netzwerkkontakte oder
                aktuelle Marktinformationen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Mit unserem Sitz in Bamberg sind wir zentral in Deutschland positioniert und sprechen die gesamte
                deutschsprachige Branche an.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0d1f3c] text-white text-sm font-semibold hover:bg-[#162d52] transition-colors"
              >
                Kontakt aufnehmen <ArrowRight size={15} />
              </Link>
            </div>
            <div className="rounded-2xl bg-[#0d1f3c] text-white p-8 lg:p-10">
              <div className="text-5xl font-bold text-amber-400 mb-2">15+</div>
              <div className="text-white/80 text-lg mb-6">Jahre Branchenerfahrung</div>
              <hr className="border-white/15 mb-6" />
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-white/60 text-sm">Mitgliedsunternehmen bundesweit</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1.000+</div>
                  <div className="text-white/60 text-sm">Fachbeiträge im Ölspurwiki</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Bamberg</div>
                  <div className="text-white/60 text-sm">Zentrum Deutschlands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0d1f3c] mb-3">Unsere Werte</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Was uns antreibt und wie wir mit unseren Mitgliedern arbeiten.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#0d1f3c]/8 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#0d1f3c]" />
                  </div>
                  <h3 className="font-semibold text-[#0d1f3c] mb-2 text-lg">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0d1f3c] mb-8">Geschichte & Entwicklung</h2>
            <div className="space-y-8">
              {[
                { year: 'Gründung', text: 'Der Ölspurring entstand aus dem Bedürfnis heraus, die fragmentierte Ölspurbeseitigungsbranche zu vernetzen und Wissen zu bündeln.' },
                { year: 'Aufbau', text: 'Sukzessiver Aufbau des Ölspurwikis als zentrale Wissensbasis. Monat für Monat kamen neue Fachbeiträge, Urteile und Marktinformationen hinzu.' },
                { year: 'Wachstum', text: 'Deutliches Wachstum der Mitgliedsunternehmen. Erweiterung der Leistungen um persönliche Beratung und regionale Vernetzungsveranstaltungen.' },
                { year: 'Heute', text: 'Die führende digitale Plattform der Branche mit über 200 Mitgliedsunternehmen und einem der umfassendsten Facharchive zur Ölspurbeseitigung in Deutschland.' },
              ].map((item) => (
                <div key={item.year} className="flex gap-5">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-sm font-bold text-[#b45309]">{item.year}</span>
                  </div>
                  <div className="flex-1 pb-8 border-b border-slate-200 last:border-0">
                    <p className="text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
