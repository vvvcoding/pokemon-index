// Import components
import PokemonCard from "./PokemonCard"

// Import context
import { usePokemonContext } from "../../context/PokemonContext"

interface CardContainerProps {
    currentPage: number
}

function CardContainer({ currentPage }: CardContainerProps) {
    const { getPagedPokemon, totalFiltered } = usePokemonContext()

    const pokemonOnPage = getPagedPokemon(currentPage)

    if (totalFiltered === 0) {
        return (
            <div className="text-center text-gray-500 py-20">No Pokémon match your search.</div>
        )
    }

    return (
        // <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pokemonOnPage.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
    )
}

export default CardContainer