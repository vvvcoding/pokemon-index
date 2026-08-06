// Import libraries

// Import components
import PokemonCard from "./PokemonCard"
import pokemonDB from "../../../../backend/storage/pokemondb.json"

interface CardContainerProps {
    currentPage: number
}

function CardContainer({ currentPage }: CardContainerProps) {

    const pokemonPerPage = 10

    // Calculate which pokemon are on the page
    const startPokemon = (currentPage - 1) * pokemonPerPage
    const endPokemon = startPokemon + pokemonPerPage
    const pokemonList = Object.values(pokemonDB.pokemon)
    const pokemonOnPage = pokemonList.slice(startPokemon, endPokemon)

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
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