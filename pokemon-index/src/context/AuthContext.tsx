// Import libraries
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import getAuthErrorMessage from "../lib/authErrors"

// Import Firebase functions
import { auth } from '../lib/firebase'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, type User } from 'firebase/auth'


interface AuthContextProps {
    children: ReactNode
}

interface AuthContextType {
    user: User | null
    isAuthenticated: boolean
    loading: boolean
    login: (email: string, password: string) => Promise<unknown>
    logout: () => Promise<unknown>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: AuthContextProps) {

    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            if (
                typeof err === "object" &&
                err !== null &&
                "code" in err &&
                typeof err.code === "string"
            ) {
                throw new Error(getAuthErrorMessage(err.code))
            }

            throw new Error("Something went wrong. Please try again.")
        }
    }

    const logout = () => signOut(auth)

    const isAuthenticated = !!user

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated, 
                loading, 
                login, 
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}