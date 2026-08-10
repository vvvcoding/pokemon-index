// Import libraries
import { createContext, useContext, useMemo, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"
import pokemonDB from "../../../backend/storage/pokemondb.json"

type Pokemon = {
    name: string
    types: string[]
    height: number
    weight: number
    sprite: string
}

interface PokemonContextProps {
    children: ReactNode
}

interface PokemonContextType {
    searchInput: string
    setSearchInput: Dispatch<SetStateAction<string>>
    generation: number
    setGeneration: Dispatch<SetStateAction<number>>
    query: string
    pokemonPerPage: number
    totalFiltered: number
    totalPages: number
    getPagedPokemon: (page: number) => Pokemon[]
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined)

export function PokemonProvider({ children }: PokemonContextProps) {
    const [searchInput, setSearchInput] = useState("")
    const [generation, setGeneration] = useState(0)
    const pokemonPerPage = 10

    const query = useMemo(() => searchInput.toLowerCase().trim(), [searchInput])

    const pokemonList: Pokemon[] =
        generation === 0
            ? Object.values(pokemonDB.pokemon)
                .flatMap((generation) => Object.values(generation) as Pokemon[])
            : Object.values(
                pokemonDB.pokemon[`gen${generation}` as keyof typeof pokemonDB.pokemon]
            )

    const filteredPokemon = useMemo(() => {
        // If there is no query, return all pokemon
        if (!query) {
            return pokemonList
        }

        const lowerQuery = query.toLowerCase()

        // Search by name or type
        return pokemonList.filter((p) => {
            const filteredNames = p.name.toLowerCase().includes(lowerQuery)
            const filteredType = p.types.some((type) =>
                type.toLowerCase().includes(lowerQuery)
            )
            return filteredNames || filteredType
        })
    }, [pokemonList, query])

    const totalFiltered = filteredPokemon.length
    const totalPages = Math.max(1, Math.ceil(totalFiltered / pokemonPerPage))

    const getPagedPokemon = (page: number) => {
        const start = (page - 1) * pokemonPerPage
        const end = start + pokemonPerPage
        return filteredPokemon.slice(start, end)
    }

    return (
        <PokemonContext.Provider
            value={{
                searchInput,
                setSearchInput,
                generation,
                setGeneration,
                query,
                pokemonPerPage,
                totalFiltered,
                totalPages,
                getPagedPokemon,
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export function usePokemonContext() {
    const context = useContext(PokemonContext)

    if (!context) {
        throw new Error("usePokemonContext must be used within PokemonProvider")
    }

    return context
}