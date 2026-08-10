// Import icons/images
import { Users, Lock } from 'lucide-react'

// Import components
import { Button } from "@/components/ui/button.tsx"
import { Checkbox } from "@/components/ui/checkbox"

// Import libraries
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

function LoginForm() {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [field, setField] = useState(false)

    return (
        <form 
            className="w-full max-w-md mx-auto" 
            onSubmit={(e) => {
                e.preventDefault()

                // Inverted because of keren 
                // remove ! to make it normal
                if (!field) {
                    navigate("/")
                }
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

            {/* Accept terms and conditions ---- forgot password */}
            <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                    <Checkbox 
                        id="terms-checkbox"
                        name="terms-checkbox"
                        checked={field}
                        onCheckedChange={(checked) => setField(checked === true)}
                    />

                    <label
                        htmlFor="terms-checkbox"
                        className="text-sm"
                    >
                        Accept terms and conditions
                    </label>
                </div>

                <Link
                    to="/"
                    className="text-md text-blue-600 hover:text-blue-800"
                >
                    Forgot password?
                </Link>
            </div>

            {/* Login button */}
            <div className="pt-7">
                <Button
                    type="submit"
                    className="w-full max-w-md h-11"
                >
                    Sign In
                </Button>
            </div>

        </form>
    )
}

export default LoginForm