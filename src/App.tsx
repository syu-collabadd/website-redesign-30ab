import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Wiki from './pages/Wiki'
import Contact from './pages/Contact'
import News from './pages/News'
import FAQ from './pages/FAQ'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import Admin from './pages/admin/Admin'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Admin — no shared layout */}
        <Route path="/admin" element={<Admin />} />

        {/* Public pages — wrapped in shared layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ueber-uns" element={<About />} />
                <Route path="/leistungen" element={<Services />} />
                <Route path="/oelspurwiki" element={<Wiki />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/aktuelles" element={<News />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </HashRouter>
  )
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <div className="text-6xl font-bold text-[#0d1f3c]/20 mb-4">404</div>
      <h1 className="text-2xl font-bold text-[#0d1f3c] mb-2">Seite nicht gefunden</h1>
      <p className="text-slate-600 mb-6">Diese Seite existiert nicht oder wurde verschoben.</p>
      <a
        href="#/"
        className="px-5 py-2.5 rounded-lg bg-[#0d1f3c] text-white text-sm font-semibold hover:bg-[#162d52] transition-colors"
      >
        Zur Startseite
      </a>
    </div>
  )
}
