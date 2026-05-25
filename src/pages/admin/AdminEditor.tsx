import { useState, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import {
  LogOut, Save, RotateCcw, Bold, Italic, UnderlineIcon, List, ListOrdered,
  AlignLeft, AlignCenter, AlignRight, Heading2, Heading3, Undo, Redo, CheckCircle
} from 'lucide-react'

const STORAGE_KEY = 'osr_content'

type PageId = 'home' | 'about' | 'services' | 'wiki' | 'news' | 'faq' | 'contact'

interface PageContent {
  title: string
  body: string
}

type ContentStore = Record<PageId, PageContent>

const defaultContent: ContentStore = {
  home: {
    title: 'Willkommen beim Ölspurring',
    body: '<p>Der Ölspurring ist die führende Wissens- und Kontaktplattform für Unternehmen der Ölspurbeseitigung in Deutschland.</p><p>Wir verbinden Branchenexpertise mit praktischem Wissen und einem starken Netzwerk.</p>',
  },
  about: {
    title: 'Über uns',
    body: '<p>Die Ölspurring GbR versteht sich in erster Linie als Dienstleister für seine Mitgliedsunternehmen und deren Geschäftspartner.</p><p>Mit Sitz in Bamberg sind wir zentral in Deutschland positioniert und bundesweit vernetzt.</p>',
  },
  services: {
    title: 'Unsere Leistungen',
    body: '<h2>Ölspurwiki</h2><p>Umfangreiche Wissensdatenbank mit aktueller Rechtsprechung, technischen Normen und Marktinformationen.</p><h2>Branchennetzwerk</h2><p>Direkter Kontakt zu führenden Unternehmen der Ölspurbeseitigungsbranche.</p>',
  },
  wiki: {
    title: 'Ölspurwiki',
    body: '<p>Das Ölspurwiki ist die größte deutsche Wissensdatenbank speziell für die Ölspurbeseitigungsbranche.</p><p>Mit über 950 Einträgen zu Rechtsprechung, Technik, Normung und Marktentwicklungen.</p>',
  },
  news: {
    title: 'Aktuelles',
    body: '<p>Hier finden Sie aktuelle Nachrichten, Urteile, Marktberichte und Veranstaltungsrückblicke aus der Ölspurbeseitigungsbranche.</p>',
  },
  faq: {
    title: 'Häufige Fragen',
    body: '<p>Hier beantworten wir die häufigsten Fragen zum Ölspurring, unseren Leistungen und der Mitgliedschaft.</p>',
  },
  contact: {
    title: 'Kontakt',
    body: '<p>Haben Sie Fragen zu unseren Leistungen oder möchten Sie Mitglied werden? Wir antworten schnell und unkompliziert.</p>',
  },
}

const pages: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Startseite' },
  { id: 'about', label: 'Über uns' },
  { id: 'services', label: 'Leistungen' },
  { id: 'wiki', label: 'Ölspurwiki' },
  { id: 'news', label: 'Aktuelles' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Kontakt' },
]

function loadContent(): ContentStore {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return { ...defaultContent, ...JSON.parse(saved) }
  } catch {}
  return defaultContent
}

function saveContent(data: ContentStore) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function ToolbarBtn({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void
  active?: boolean
  title: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-1.5 rounded transition-colors ${
        active ? 'bg-[#0d1f3c] text-white' : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      {children}
    </button>
  )
}

export default function AdminEditor({ onLogout }: { onLogout: () => void }) {
  const [content, setContent] = useState<ContentStore>(loadContent)
  const [activePage, setActivePage] = useState<PageId>('home')
  const [saved, setSaved] = useState(false)
  const [titleDraft, setTitleDraft] = useState(content[activePage].title)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: content[activePage].body,
    editorProps: {
      attributes: { class: 'min-h-[300px] focus:outline-none' },
    },
  })

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(content[activePage].body)
    }
    setTitleDraft(content[activePage].title)
  }, [activePage])

  const handleSave = () => {
    if (!editor) return
    const updated: ContentStore = {
      ...content,
      [activePage]: { title: titleDraft, body: editor.getHTML() },
    }
    setContent(updated)
    saveContent(updated)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const handleReset = () => {
    if (!confirm('Seiteninhalt auf Standardinhalt zurücksetzen?')) return
    const def = defaultContent[activePage]
    setTitleDraft(def.title)
    editor?.commands.setContent(def.body)
    const updated = { ...content, [activePage]: def }
    setContent(updated)
    saveContent(updated)
  }

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'oelspurring-content.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-[#0d1f3c] text-white px-4 sm:px-6 py-3 flex items-center justify-between gap-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center text-xs font-bold">ÖR</div>
          <span className="font-semibold text-sm">Content-Verwaltung</span>
          <span className="text-white/40 text-xs hidden sm:block">Ölspurring</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleExport}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-white/10 hover:bg-white/20 transition-colors"
          >
            JSON Export
          </button>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-white/10 hover:bg-white/20 transition-colors"
          >
            <LogOut size={13} />
            Abmelden
          </button>
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-48 sm:w-56 bg-white border-r border-slate-200 flex-shrink-0 py-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-4 mb-3">Seiten</p>
          <nav className="space-y-0.5">
            {pages.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePage(p.id)}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                  activePage === p.id
                    ? 'bg-[#0d1f3c]/8 text-[#0d1f3c]'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                {p.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Editor */}
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Title */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Seitentitel
              </label>
              <input
                type="text"
                value={titleDraft}
                onChange={(e) => setTitleDraft(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-lg font-semibold text-[#0d1f3c] focus:outline-none focus:ring-2 focus:ring-[#0d1f3c]/20 focus:border-[#0d1f3c] transition-colors"
              />
            </div>

            {/* Body editor */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Seiteninhalt
              </label>

              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 border border-slate-300 border-b-0 rounded-t-lg bg-slate-50">
                <ToolbarBtn title="Fett" onClick={() => editor?.chain().focus().toggleBold().run()} active={editor?.isActive('bold')}>
                  <Bold size={15} />
                </ToolbarBtn>
                <ToolbarBtn title="Kursiv" onClick={() => editor?.chain().focus().toggleItalic().run()} active={editor?.isActive('italic')}>
                  <Italic size={15} />
                </ToolbarBtn>
                <ToolbarBtn title="Unterstrichen" onClick={() => editor?.chain().focus().toggleUnderline().run()} active={editor?.isActive('underline')}>
                  <UnderlineIcon size={15} />
                </ToolbarBtn>
                <div className="w-px h-5 bg-slate-300 mx-1" />
                <ToolbarBtn title="Überschrift 2" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} active={editor?.isActive('heading', { level: 2 })}>
                  <Heading2 size={15} />
                </ToolbarBtn>
                <ToolbarBtn title="Überschrift 3" onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} active={editor?.isActive('heading', { level: 3 })}>
                  <Heading3 size={15} />
                </ToolbarBtn>
                <div className="w-px h-5 bg-slate-300 mx-1" />
                <ToolbarBtn title="Liste" onClick={() => editor?.chain().focus().toggleBulletList().run()} active={editor?.isActive('bulletList')}>
                  <List size={15} />
                </ToolbarBtn>
                <ToolbarBtn title="Nummerierte Liste" onClick={() => editor?.chain().focus().toggleOrderedList().run()} active={editor?.isActive('orderedList')}>
                  <ListOrdered size={15} />
                </ToolbarBtn>
                <div className="w-px h-5 bg-slate-300 mx-1" />
                <ToolbarBtn title="Linksbündig" onClick={() => editor?.chain().focus().setTextAlign('left').run()} active={editor?.isActive({ textAlign: 'left' })}>
                  <AlignLeft size={15} />
                </ToolbarBtn>
                <ToolbarBtn title="Zentriert" onClick={() => editor?.chain().focus().setTextAlign('center').run()} active={editor?.isActive({ textAlign: 'center' })}>
                  <AlignCenter size={15} />
                </ToolbarBtn>
                <ToolbarBtn title="Rechtsbündig" onClick={() => editor?.chain().focus().setTextAlign('right').run()} active={editor?.isActive({ textAlign: 'right' })}>
                  <AlignRight size={15} />
                </ToolbarBtn>
                <div className="w-px h-5 bg-slate-300 mx-1" />
                <ToolbarBtn title="Rückgängig" onClick={() => editor?.chain().focus().undo().run()}>
                  <Undo size={15} />
                </ToolbarBtn>
                <ToolbarBtn title="Wiederholen" onClick={() => editor?.chain().focus().redo().run()}>
                  <Redo size={15} />
                </ToolbarBtn>
              </div>

              {/* Editor area */}
              <div className="border border-slate-300 rounded-b-lg bg-white tiptap-content">
                <EditorContent editor={editor} />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={handleSave}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0d1f3c] text-white text-sm font-semibold hover:bg-[#162d52] transition-colors"
              >
                {saved ? <CheckCircle size={15} /> : <Save size={15} />}
                {saved ? 'Gespeichert!' : 'Speichern'}
              </button>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                <RotateCcw size={14} />
                Standard wiederherstellen
              </button>
              <button
                onClick={handleExport}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors sm:hidden"
              >
                JSON Export
              </button>
            </div>

            {/* Info box */}
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
              <strong>Hinweis:</strong> Änderungen werden im Browser-Speicher (localStorage) gesichert.
              Nutzen Sie den JSON-Export, um Inhalte zu sichern oder an Ihren Webentwickler weiterzugeben,
              damit Änderungen dauerhaft in die Website eingepflegt werden können.
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
