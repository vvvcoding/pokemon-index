import { Button } from "@/components/ui/button.tsx"
import { Card, CardDescription, CardHeader, CardTitle, CardAction, CardContent, CardFooter } from "@/components/ui/card"

interface Pokemon {
    name: string
    types: string[]
    height: number
    weight: number
    sprite: string
}

interface PokemonCardProps {
    pokemon: Pokemon
}

function PokemonCard({ pokemon }: PokemonCardProps) {

    // Capitalize pokemon names
    const capitalize = (str: string): string => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Correct the height and weight of the pokemon
    const height = (inputHeight: number): number => {
        return inputHeight / 10
    }

    const weight = (inputWeight: number): number => {
        return inputWeight / 10
    }

    return (
        <div className="border relative rounded-xl">
            <Card>
                <CardHeader>
                    <CardTitle>{capitalize(pokemon.name)}</CardTitle>
                    <CardDescription>
                        Type: {capitalize(pokemon.types.join(", "))}
                    </CardDescription>
                    <CardAction>
                        {/* <Button>Pokemon Action</Button> */}
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <div className="pt-2">  
                        <div className="pb-3">
                            <div className="flex justify-center border relative rounded-lg bg-white">
                                <img src={pokemon.sprite} className="w-64 h-64" />
                            </div>
                        </div>
                        <div className="flex justify-center gap-8">
                            <p>Height: {height(pokemon.height)} m</p>
                            <p>Weight: {weight(pokemon.weight)} kg</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <p>Pokemon Card</p>
                    <Button>Pokemon Action</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default PokemonCard