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

function DropDownFilterGeneration() {

    const [genText, setGenText] = useState("All Generations")
    const { setGeneration } = usePokemonContext()

    return (
        <NavigationMenu>
            <NavigationMenuList className="gap-1">

                {/* Generations dropdown */}
                <NavigationMenuItem className="border relative rounded-lg">
                    <NavigationMenuTrigger>{genText}</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-64">
                        <div className="flex flex-col gap-1 p-1">
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
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default DropDownFilterGeneration