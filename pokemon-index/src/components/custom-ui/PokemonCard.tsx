import { Button } from "@/components/ui/button.tsx"
import { Card, CardDescription, CardHeader, CardTitle, CardAction, CardContent, CardFooter } from "@/components/ui/card"

interface Pokemon {
    name: string
    types: string[]
    height: number
    weight: number
}

interface PokemonCardProps {
    pokemon: Pokemon
}

function PokemonCard({ pokemon }: PokemonCardProps) {

    const capitalize = (str: string): string => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="border relative rounded-xl">
            <Card>
                <CardHeader>
                    <CardTitle>{capitalize(pokemon.name)}</CardTitle>
                    <CardDescription>
                        Type: {pokemon.types.join(", ")}
                    </CardDescription>
                    <CardAction>
                        {/* <Button>Pokemon Action</Button> */}
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p>Height: {pokemon.height} m</p>
                    <p>Weight: {pokemon.weight} lbs</p>
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