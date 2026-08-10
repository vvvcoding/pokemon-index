import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuTrigger, 
    NavigationMenuItem, 
    NavigationMenuContent, 
    //NavigationMenuLink 
} from "../ui/navigation-menu"
import { Button } from "@/components/ui/button.tsx"
import SearchBar from "./SearchBar"

// Import context
import { usePokemonContext } from "../../context/PokemonContext"

function NavBar() {

    const navigate = useNavigate()
    const [genText, setGenText] = useState("All Generations")
    const { setGeneration } = usePokemonContext()

    return (
        <div className="sticky top-0 z-50 border-b relative bg-white px-7 py-1">
            <nav className="p-2 flex items-center justify-between">
                
                {/* Title */}
                <h1 className="text-md font-semibold pl-2">Pokemon Index</h1>
            
                {/* Search Bar */}
                <div className="flex items-center justify-between gap-2 absolute left-1/2 -translate-x-1/2">
                    <SearchBar />
                    <NavigationMenu>
                        <NavigationMenuList className="gap-1">
                            {/* Generations dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>{genText}</NavigationMenuTrigger>
                                <NavigationMenuContent className="flex flex-col">
                                    <Button
                                        onClick={() => (setGeneration(0), setGenText("All Generations"))}
                                    >
                                        All Generations
                                    </Button>
                                    <Button
                                        onClick={() => (setGeneration(1), setGenText("Generation One"))}
                                    >
                                        Generation One
                                    </Button>
                                    <Button
                                        onClick={() => (setGeneration(2), setGenText("Generation Two"))}
                                    >
                                        Generation Two
                                    </Button>                               
                                    <Button
                                        onClick={() => (setGeneration(3), setGenText("Generation Three"))}
                                    >
                                        Generation Three
                                    </Button>
                                    <Button
                                        onClick={() => (setGeneration(4), setGenText("Generation Four"))}
                                    >
                                        Generation Four
                                    </Button>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Navigation Menu */}
                <NavigationMenu>
                        <NavigationMenuList className="gap-1">

                                <NavigationMenuItem>
                                    
                                </NavigationMenuItem>

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