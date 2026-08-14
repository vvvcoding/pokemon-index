import { useNavigate } from 'react-router-dom'
import { 
    NavigationMenu, 
    NavigationMenuList, 
} from "../ui/navigation-menu"
import { Button } from "@/components/ui/button.tsx"
import { useAuth } from "@/context/AuthContext"


function NavBar() {

    const { user, logout } = useAuth()
    const navigate = useNavigate()

    return (
        <div className="sticky top-0 z-50 border-b relative bg-white px-7 py-1">
            <nav className="p-2 flex items-center justify-between">
                
                {/* Title */}
                <h1 className="text-md font-semibold cursor-default pl-2" onClick={() => navigate('/')}>Pokemon Index</h1>

                {/* Navigation Menu */}
                <NavigationMenu>
                        <NavigationMenuList className="gap-1">

                                {/* Home button */}
                                <h6 
                                    className="pr-10 text-md font-semibold text-gray-900 cursor-default hover:transition duration-100 hover:text-black hover:underline"
                                    onClick={() => navigate('/')}
                                >
                                    Home
                                </h6>

                                {/* User dashboard button */}
                                <h6
                                    className="pr-10 text-md font-semibold text-gray-900 cursor-default hover:transition duration-100 hover:text-black hover:underline"
                                    onClick={() => navigate('/dashboard')}
                                >
                                    Dashboard
                                </h6>

                                {/* Create account button */}
                                {user ? (
                                    <Button
                                        onClick={logout}
                                    >
                                        Log Out
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => navigate('/login')}
                                    >
                                        Log In
                                    </Button>
                                )}
                                

                        </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </div>
    )
}

export default NavBar