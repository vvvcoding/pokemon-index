// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
    NavigationMenu, 
    NavigationMenuList, 
    // NavigationMenuTrigger, 
    // NavigationMenuItem, 
    // NavigationMenuContent, 
} from "../ui/navigation-menu"
import { Button } from "@/components/ui/button.tsx"
// import SearchBar from "./SearchBar"

// Import context
// import { usePokemonContext } from "../../context/PokemonContext"

function NavBar() {

    const navigate = useNavigate()
    // const [genText, setGenText] = useState("All Generations")
    // const { setGeneration } = usePokemonContext()

    return (
        <div className="sticky top-0 z-50 border-b relative bg-white px-7 py-1">
            <nav className="p-2 flex items-center justify-between">
                
                {/* Title */}
                <h1 className="text-md font-semibold pl-2" onClick={() => navigate('/')}>Pokemon Index</h1>

                {/* Navigation Menu */}
                <NavigationMenu>
                        <NavigationMenuList className="gap-1">

                                {/* Home button */}
                                <h6 
                                    className="pr-10 font-semibold text-md"
                                    onClick={() => navigate('/')}
                                >
                                    Home
                                </h6>

                                {/* User dashboard button */}
                                <h6
                                    className="pr-10 font-semibold text-md"
                                    onClick={() => navigate('/dashboard')}
                                >
                                    Dashboard
                                </h6>

                                {/* Create account button */}
                                <Button
                                    onClick={() => navigate('/login')}
                                >
                                    Log In
                                </Button>

                        </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </div>
    )
}

export default NavBar