import { useState } from 'react'
import { Lock, Eye, EyeOff } from 'lucide-react'

const ADMIN_PW = import.meta.env.VITE_ADMIN_PASSWORD || 'oelspurring2025'

export default function AdminLogin({ onLogin }: { onLogin: (ok: boolean) => void }) {
  const [pw, setPw] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pw === ADMIN_PW) {
      onLogin(true)
    } else {
      setError(true)
      setPw('')
      setTimeout(() => setError(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#0d1f3c] flex items-center justify-center">
            <Lock size={20} className="text-white" />
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <h1 className="text-xl font-bold text-[#0d1f3c] mb-1 text-center">Bereich für Administratoren</h1>
          <p className="text-sm text-slate-500 text-center mb-7">Ölspurring – Content-Verwaltung</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Passwort</label>
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="Admin-Passwort eingeben"
                  autoFocus
                  className={`w-full px-4 py-2.5 pr-11 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-colors ${
                    error
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-slate-300 focus:ring-[#0d1f3c]/20 focus:border-[#0d1f3c]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {show ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
              {error && <p className="text-red-500 text-xs mt-1.5">Falsches Passwort. Bitte erneut versuchen.</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-[#0d1f3c] text-white text-sm font-semibold hover:bg-[#162d52] transition-colors"
            >
              Anmelden
            </button>
          </form>
        </div>
        <p className="text-xs text-slate-400 text-center mt-5">
          Das Passwort wird über die Umgebungsvariable <code className="bg-slate-100 px-1 rounded">VITE_ADMIN_PASSWORD</code> gesetzt.
        </p>
      </div>
    </div>
  )
}
