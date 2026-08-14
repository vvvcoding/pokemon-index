import LoginRightContainer from '../components/custom-ui/login-ui/LoginRightContainer'
import LoginForm from '../components/custom-ui/login-ui/LoginForm'
import SignUpForm from '../components/custom-ui/login-ui/SignUpForm'

// Import libraries
import { useState } from 'react'

function Login() {

    const [signIn, setSignIn] = useState(false)

    return (
        <div className="h-screen w-full">
            <div className="grid grid-cols-2 h-full">

                {/* Left side of the screen */}
                <div className="text-center h-full flex flex-col justify-center">
                    
                    {/* Login form and sign up form*/}
                    {signIn ? (
                        <SignUpForm
                            setSignIn={setSignIn}
                        />
                    ) : (
                        <LoginForm
                            setSignIn={setSignIn}
                        />
                    )}
                    
                </div>

                {/* Right side of the screen */}
                <div className="relative h-[calc(100%-2rem)] m-4 rounded-2xl overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-red-800 flex flex-col items-center justify-center">

                    {/* Background container with pokemon image */}
                    <LoginRightContainer />

                </div>
            </div>
        </div>
    )
}

export default Login