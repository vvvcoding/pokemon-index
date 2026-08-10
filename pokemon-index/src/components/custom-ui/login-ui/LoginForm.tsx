// Import icons/images
import { Users, Lock } from 'lucide-react'

// Import components
import { Button } from "@/components/ui/button.tsx"

// Import libraries
import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react'

interface LoginFormProps {
    setSignIn: React.Dispatch<React.SetStateAction<boolean>>
}

function LoginForm({ setSignIn }: LoginFormProps) {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form 
            className="w-full max-w-md mx-auto" 
            onSubmit={(e) => {
                e.preventDefault()
                navigate('/')
            }}
        >
            
            {/* Login title */}
            <h1 className="text-3xl pb-2">Log in to your account.</h1>
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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

            {/* Forgot password */}
            <div className="flex justify-end pt-2">
                <Link
                    to="/"
                    className="text-sm text-blue-600 hover:text-blue-800"
                >
                    Forgot password?
                </Link>
            </div>

            {/* Login button */}
            <div className="pt-5">
                <Button
                    type="submit"
                    className="w-full max-w-md h-11"
                >
                    Sign In
                </Button>
            </div>
            
            {/* User doesn't have an account */}
            <div className="pt-7 text-center">
                <h3 
                    className="text-sm text-gray-500"
                >
                    Don't have an account? <a className="text-blue-600 hover:text-blue-800" onClick={() => setSignIn(false)}>Create account</a>
                </h3>
            </div>

        </form>
    )
}

export default LoginForm