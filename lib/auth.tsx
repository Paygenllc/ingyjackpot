"use client"

import * as React from "react"

type Session = {
  isAuthenticated: boolean
  user: { name: string; initials: string } | null
}

type AuthContextValue = Session & {
  signIn: (name?: string) => void
  signOut: () => void
}

const AuthContext = React.createContext<AuthContextValue | null>(null)

const STORAGE_KEY = "ingy.session"

function readInitial(): Session {
  if (typeof window === "undefined") {
    return { isAuthenticated: false, user: null }
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { isAuthenticated: false, user: null }
    const parsed = JSON.parse(raw) as Session
    return parsed.isAuthenticated && parsed.user
      ? { isAuthenticated: true, user: parsed.user }
      : { isAuthenticated: false, user: null }
  } catch {
    return { isAuthenticated: false, user: null }
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = React.useState<Session>({
    isAuthenticated: false,
    user: null,
  })

  // Hydrate from localStorage after mount to avoid SSR mismatch.
  React.useEffect(() => {
    setSession(readInitial())
  }, [])

  const persist = React.useCallback((next: Session) => {
    setSession(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore quota / privacy-mode errors
    }
  }, [])

  const signIn = React.useCallback(
    (name = "Player") => {
      const initials = name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase() ?? "")
        .join("") || "PL"
      persist({
        isAuthenticated: true,
        user: { name, initials },
      })
    },
    [persist],
  )

  const signOut = React.useCallback(() => {
    persist({ isAuthenticated: false, user: null })
  }, [persist])

  const value = React.useMemo<AuthContextValue>(
    () => ({ ...session, signIn, signOut }),
    [session, signIn, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useSession() {
  const ctx = React.useContext(AuthContext)
  if (!ctx) {
    // Safe fallback so non-wrapped consumers don't crash during SSR/tests.
    return {
      isAuthenticated: false,
      user: null,
      signIn: () => {},
      signOut: () => {},
    } as AuthContextValue
  }
  return ctx
}
