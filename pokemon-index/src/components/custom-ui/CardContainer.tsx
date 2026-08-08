// Import components
import PokemonCard from "./PokemonCard"

// Import data
import pokemonDB from "../../../../backend/storage/pokemondb.json"

// Import context
import { usePokemonContext } from "../../context/PokemonContext"

interface CardContainerProps {
    currentPage: number
}

function CardContainer({ currentPage }: CardContainerProps) {
    const { query } = usePokemonContext()
    const pokemonPerPage = 10

    const pokemonList = Object.values(pokemonDB.pokemon)
    const filteredPokemon = query
        ? pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(query))
        : pokemonList

    const startPokemon = (currentPage - 1) * pokemonPerPage
    const endPokemon = startPokemon + pokemonPerPage
    const pokemonOnPage = filteredPokemon.slice(startPokemon, endPokemon)

    if (filteredPokemon.length === 0) {
        return (
            <div className="text-center text-gray-500 py-20">
                No Pokémon match your search.
            </div>
        )
    }

    return (
        // <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">    
            {pokemonOnPage.map((pokemon) => (
                <PokemonCard 
                    key={pokemon.name}
                    pokemon={pokemon}
                />
            ))}
        </div>
    )
}

export default CardContainer