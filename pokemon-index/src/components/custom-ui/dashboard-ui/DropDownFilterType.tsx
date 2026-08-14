// Import components
import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuTrigger, 
    NavigationMenuItem, 
    NavigationMenuContent, 
} from "../../ui/navigation-menu"
import { Button } from "../../ui/button"

// Import libraries
import { useState } from 'react'

// Import context
import { usePokemonContext } from "../../../context/PokemonContext"

function DropDownFilterType() {
    
    const [typeText, setTypeText] = useState("All Types")
    const { setGeneration } = usePokemonContext()

    return (
        <NavigationMenu>
            <NavigationMenuList className="gap-1">

                {/* Generations dropdown */}
                <NavigationMenuItem className="border relative rounded-lg">
                    <NavigationMenuTrigger>{typeText}</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-64">
                        <div className="flex flex-col gap-1 p-1">
                            <Button
                                onClick={() => (setGeneration(0), setTypeText("All Generations"))}
                            >
                                All Generations
                            </Button>
                            <Button
                                onClick={() => (setGeneration(1), setTypeText("Generation One"))}
                            >
                                Generation One
                            </Button>
                            <Button
                                onClick={() => (setGeneration(2), setTypeText("Generation Two"))}
                            >
                                Generation Two
                            </Button>
                            <Button
                                onClick={() => (setGeneration(3), setTypeText("Generation Three"))}
                            >
                                Generation Three
                            </Button>
                            <Button
                                onClick={() => (setGeneration(4), setTypeText("Generation Four"))}
                            >
                                Generation Four
                            </Button>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default DropDownFilterType