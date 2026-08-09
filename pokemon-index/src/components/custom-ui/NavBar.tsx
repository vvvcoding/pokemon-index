import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuTrigger, 
    NavigationMenuItem, 
    NavigationMenuContent, 
    NavigationMenuLink 
} from "../ui/navigation-menu"
import { Button } from "@/components/ui/button.tsx"
import SearchBar from "./SearchBar"

// Import context
import { usePokemonContext } from "../../context/PokemonContext"

function NavBar() {

    const { setGeneration } = usePokemonContext()

    return (
        <div className="sticky top-0 z-50 border-b relative bg-white px-7 py-1">
            <nav className="p-2 flex items-center justify-between">
                
                {/* Title */}
                <h1 className="text-md font-semibold pl-2">Pokemon Index</h1>
            
                {/* Search Bar */}
                <SearchBar />

                {/* Navigation Menu */}
                <NavigationMenu>
                        <NavigationMenuList>

                                {/* Generations dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Generations</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <Button
                                            onClick={() => setGeneration(1)}
                                        >
                                            Generation One
                                        </Button>
                                        <Button
                                            onClick={() => setGeneration(2)}
                                        >
                                            Generation Two
                                        </Button>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink>Link</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Create account button */}
                                <Button>Log In</Button>

                        </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </div>
    )
}

export default NavBar