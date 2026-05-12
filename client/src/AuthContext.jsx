import React, { createContext, useContext, useState } from 'react'
const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  return <AuthContext.Provider value={{ user, login: (u) => setUser(u), logout: () => setUser(null) }}>{children}</AuthContext.Provider>
}