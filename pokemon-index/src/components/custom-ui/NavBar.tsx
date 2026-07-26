import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuTrigger, 
    NavigationMenuItem, 
    NavigationMenuContent, 
    NavigationMenuLink 
} from "../ui/navigation-menu"
import SearchBar from "./SearchBar"

function NavBar() {
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
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </div>
    )
}

export default NavBar