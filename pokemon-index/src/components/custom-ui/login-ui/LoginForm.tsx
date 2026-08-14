// Import icons/images
import { Users, Lock } from 'lucide-react'

// Import components
import { Button } from "@/components/ui/button.tsx"

// Import libraries
import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react'

// Import context
import { useAuth } from '../../../context/AuthContext' 

interface LoginFormProps {
    setSignIn: React.Dispatch<React.SetStateAction<boolean>>
}

function LoginForm({ setSignIn }: LoginFormProps) {

    const { login } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [submitting, setSubmitting] = useState(false)

    // Handle form submission for log in
    const handleLogIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")
        setSubmitting(true)

        try {
            await login(email, password)
            console.log("Signed in")
            navigate('/')
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
            }
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <form 
            className="w-full max-w-md mx-auto" 
            onSubmit={handleLogIn}
        >
            
            {/* Login title */}
            <h1 className="text-3xl pb-2">Log in to your account</h1>
            <h3 className="text-md pb-10 text-gray-500">Enter your email and password to log in.</h3>

            {/* Username/email */}
            <div className="pb-4">
                <div className="relative">
                    <Users 
                            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                    />
                    <input
                        type="text"
                        className="w-full max-w-md h-11 border rounded-lg p-2 pl-9 text-sm bg-gray-100"
                        placeholder="Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            {/* Password */}
            <div>
                <div className="relative">
                    <Lock 
                            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                    />
                    <input
                        type="password"
                        className="w-full max-w-md h-11 border rounded-lg p-2 pl-9 text-sm bg-gray-100"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            {/* Error message */}
            

            {/* Forgot password */}
            <div className="flex items-center justify-between gap-4 pt-2">
                <div className="min-w-0">
                    {error && (
                        <p className="text-sm text-red-600 truncate">
                            {error}
                        </p>
                    )}
                </div>

                <Link
                    to="/"
                    className="shrink-0 text-sm text-blue-600 hover:text-blue-800"
                >
                    Forgot password?
                </Link>
            </div>

            {/* Login button */}
            <div className="pt-5">
                <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full max-w-md h-11"
                >
                    {submitting ? "Signing in..." : "Sign In"}
                </Button>
            </div>
            
            {/* User doesn't have an account */}
            <div className="pt-7 text-center">
                <h3 
                    className="text-sm text-gray-500"
                >
                    Don't have an account? <a className="text-blue-600 hover:text-blue-800" onClick={() => setSignIn(true)}>Create account</a>
                </h3>
            </div>

        </form>
    )
}

export default LoginForm