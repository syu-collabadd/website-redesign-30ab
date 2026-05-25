import { useState, useEffect } from 'react'
import AdminLogin from './AdminLogin'
import AdminEditor from './AdminEditor'

const SESSION_KEY = 'osr_admin_auth'

export default function Admin() {
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'ok') {
      setAuthed(true)
    }
  }, [])

  const login = (ok: boolean) => {
    if (ok) {
      sessionStorage.setItem(SESSION_KEY, 'ok')
      setAuthed(true)
    }
  }

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setAuthed(false)
  }

  return authed ? <AdminEditor onLogout={logout} /> : <AdminLogin onLogin={login} />
}
