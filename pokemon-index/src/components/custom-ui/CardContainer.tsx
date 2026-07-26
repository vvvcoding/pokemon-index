import PokemonCard from "./PokemonCard"
import pokemonDB from "../../../../backend/storage/pokemondb.json"

function CardContainer() {

    const pokemonList = Object.values(pokemonDB.pokemon)

    return (
        // grid grid-cols-3 gap-4
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
            {pokemonList.map((pokemon) => (
                <PokemonCard 
                    key={pokemon.name}
                    pokemon={pokemon}
                />
            ))}
        </div>
    )
}

export default CardContainer