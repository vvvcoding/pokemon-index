// Import icons/images
import { Users, Lock } from 'lucide-react'

// Import components
import { Button } from "@/components/ui/button.tsx"
import { Checkbox } from "@/components/ui/checkbox"

// Import libraries
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface SignUpProps {
    setSignIn: React.Dispatch<React.SetStateAction<boolean>>
}

function SignUpForm({ setSignIn }: SignUpProps) {

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
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
            <h1 className="text-3xl pb-2">Create your account</h1>
            <h3 className="text-md pb-10 text-gray-500">Fill out the information below to start your journey.</h3>

            {/* First and last name */}
            <div className="flex gap-4 pb-4">
                <div className="flex-1 text-left">
                    <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        First Name
                    </label>

                    <input
                        id="firstName"
                        type="text"
                        className="w-full h-11 border rounded-lg p-2 text-sm bg-gray-100"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="flex-1 text-left">
                    <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Last Name
                    </label>

                    <input
                        id="lastName"
                        type="text"
                        className="w-full h-11 border rounded-lg p-2 text-sm bg-gray-100"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>

            {/* Username/email */}
            <div className="pb-4">
                <div className="flex-1 text-left">
                    <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Username
                    </label>
                    <div className="relative">
                        <Users 
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                                size={18}
                        />
                        <input
                            id="username"
                            type="text"
                            className="w-full max-w-md h-11 border rounded-lg p-2 pl-9 text-sm bg-gray-100"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Password */}
            <div>
                <div className="flex-1 text-left">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <Lock 
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                                size={18}
                        />
                        <input
                            id="password"
                            type="password"
                            className="w-full max-w-md h-11 border rounded-lg p-2 pl-9 text-sm bg-gray-100"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Accept terms and conditions ---- forgot password */}
            <div className="pt-4">
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
            </div>

            {/* Login button */}
            <div className="pt-7">
                <Button
                    type="submit"
                    className="w-full max-w-md h-11"
                >
                    Sign Up
                </Button>
            </div>

            {/* Already have an account */}
            <div className="pt-7 text-center">
                <h3 className="text-sm text-gray-500">Already have an account? <a className="text-blue-600 hover:text-blue-800" onClick={() => setSignIn(false)}>Log in</a></h3>
            </div>

        </form>
    )
}

export default SignUpForm