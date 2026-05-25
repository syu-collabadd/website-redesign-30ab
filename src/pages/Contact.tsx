import { useState } from 'react'
import { MapPin, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send via an API or mailto
    const mailtoUrl = `mailto:info@oelspurring.de?subject=${encodeURIComponent(form.subject || 'Anfrage über Website')}&body=${encodeURIComponent(
      `Name: ${form.name}\nUnternehmen: ${form.company}\nE-Mail: ${form.email}\n\n${form.message}`
    )}`
    window.location.href = mailtoUrl
    setSent(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-[#b45309] uppercase tracking-wider mb-3">Kontakt</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0d1f3c] mb-5">
              Sprechen Sie uns an
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Haben Sie Fragen zu unseren Leistungen oder möchten Sie Mitglied werden?
              Wir antworten schnell und unkompliziert.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[#0d1f3c] mb-5">Kontaktinformationen</h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1f3c]/8 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#0d1f3c]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0d1f3c] mb-0.5">Standort</div>
                      <div className="text-sm text-slate-600">Bamberg, Deutschland</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1f3c]/8 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#0d1f3c]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0d1f3c] mb-0.5">E-Mail</div>
                      <div className="text-sm text-slate-600">Über das Kontaktformular</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1f3c]/8 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-[#0d1f3c]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0d1f3c] mb-0.5">Reaktionszeit</div>
                      <div className="text-sm text-slate-600">In der Regel innerhalb von 24 Stunden</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#0d1f3c] text-white p-6">
                <h3 className="font-semibold mb-2">Mitglied werden?</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Nutzen Sie das Kontaktformular und geben Sie im Betreff an,
                  dass Sie Mitglied werden möchten. Wir melden uns mit allen Details.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0d1f3c] mb-2">Nachricht vorbereitet</h2>
                  <p className="text-slate-600 max-w-sm">
                    Ihr E-Mail-Programm sollte sich geöffnet haben. Bitte senden Sie die vorbereitete E-Mail ab.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm text-[#b45309] hover:underline"
                  >
                    Neue Anfrage stellen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-[#0d1f3c] mb-6">Ihre Nachricht</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Max Mustermann"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1f3c]/30 focus:border-[#0d1f3c] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">E-Mail *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="max@beispiel.de"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1f3c]/30 focus:border-[#0d1f3c] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Unternehmen</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Ihre Firma GmbH"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1f3c]/30 focus:border-[#0d1f3c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Betreff *</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Worum geht es?"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1f3c]/30 focus:border-[#0d1f3c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Nachricht *</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Ihre Nachricht an uns…"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1f3c]/30 focus:border-[#0d1f3c] transition-colors resize-none"
                    />
                  </div>
                  <p className="text-xs text-slate-500">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
                    <a href="#/datenschutz" className="text-[#b45309] hover:underline">Datenschutzerklärung</a> zu. *
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0d1f3c] text-white text-sm font-semibold hover:bg-[#162d52] transition-colors"
                  >
                    <Send size={15} />
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
