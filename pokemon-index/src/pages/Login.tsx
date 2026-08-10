import { Users, Lock } from 'lucide-react'
import { useState } from 'react'
import { Button } from "@/components/ui/button.tsx"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/components/ui/field"
import { useNavigate } from 'react-router-dom'
import pikachuImage from "../assets/images/pikachuPixel-removebg-preview.png"

function Login() {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [field, setField] = useState(false)

    return (
        <div className="h-screen w-full">
            <div className="grid grid-cols-2 h-full">
                <div className="text-center h-full flex flex-col justify-center">
                    
                    {/* Login form */}
                    <form 
                        className="w-full max-w-sm mx-auto" 
                        onSubmit={(e) => {
                            e.preventDefault()

                            // Inverted because of keren 
                            // remove ! to make it normal
                            if (!field) {
                                navigate("/")
                            }
                        }}
                    >
                        
                        <div>
                            {/* Login title */}
                            <h1 className="text-3xl pb-2">Log in to your account.</h1>
                            <h3 className="text-md pb-10 text-gray-500">Enter your email and password to log in.</h3>
                        </div>

                        {/* Username/email */}
                        <div className="pb-4">
                            <div className="relative">
                                <Users 
                                        className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={18}
                                />
                                <input
                                    type="text"
                                    className="w-full max-w-sm h-11 border rounded-lg p-2 pl-9 text-sm bg-gray-100"
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
                                    className="w-full max-w-sm h-11 border rounded-lg p-2 pl-9 text-sm bg-gray-100"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Recieve updates and forgot password */}
                        <Field 
                            orientation="horizontal" 
                            className="pt-4"
                        >
                            <Checkbox 
                                id="terms-checkbox"
                                name="terms-checkbox"
                                checked={field}
                                onCheckedChange={(checked) => setField(checked === true)}
                            />
                            <FieldContent>
                                <FieldLabel htmlFor="terms-checkbox">
                                    Accept terms and conditions
                                </FieldLabel>
                            </FieldContent>
                        </Field>

                        {/* Login button */}
                        <div className="pt-7">
                            <Button
                                type="submit"
                                className="w-full max-w-sm h-11"
                            >
                                Sign In
                            </Button>
                        </div>

                    </form>

                </div>

                {/* Pokeball image */}
                {/* <div className="h-[calc(100%-2rem)] m-4 rounded-2xl bg-red-500 flex flex-col justify-center text-center">
                    <img
                        src={pikachuImage}
                        alt="Pikachu"
                        className="w-128 h-128 object-contain mx-auto"
                    />
                </div> */}

                <div className="relative h-[calc(100%-2rem)] m-4 rounded-2xl overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-red-800 flex flex-col items-center justify-center">

                    {/* Background decorations */}
                    <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10" />
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-black/10" />

                    {/* Glow */}
                    <div className="absolute w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl" />

                    {/* Pikachu */}
                    <img
                        src={pikachuImage}
                        alt="Pikachu"
                        className="relative z-10 w-128 h-128 object-contain drop-shadow-2xl -translate-x-2"
                    />

                    {/* Text */}
                    <div className="relative z-10 text-white">
                        <h2 className="text-4xl font-bold">
                            Gotta Catch 'Em All!
                        </h2>

                        <p className="mt-2 text-white/80">
                            Your Pokémon journey starts here.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login