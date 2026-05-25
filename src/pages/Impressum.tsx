export default function Impressum() {
  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-sm font-semibold text-[#b45309] uppercase tracking-wider mb-3">Rechtliches</div>
          <h1 className="text-4xl font-bold text-[#0d1f3c]">Impressum</h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-[#0d1f3c] mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                Ölspurring GbR<br />
                Bamberg, Deutschland
              </p>
              <p className="mt-3">
                <strong>Kontakt:</strong> Über das{' '}
                <a href="#/kontakt" className="text-[#b45309] hover:underline">Kontaktformular</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0d1f3c] mb-3">Vertreten durch</h2>
              <p>Die Gesellschafter der Ölspurring GbR</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0d1f3c] mb-3">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                Auf Anfrage erhältlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0d1f3c] mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Ölspurring GbR<br />
                Bamberg, Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0d1f3c] mb-3">Haftungsausschluss</h2>

              <h3 className="font-semibold text-[#0d1f3c] mt-4 mb-2">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="font-semibold text-[#0d1f3c] mt-4 mb-2">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="font-semibold text-[#0d1f3c] mt-4 mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0d1f3c] mb-3">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
