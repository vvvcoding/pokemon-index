// Import libraries
import { createContext, useContext, useMemo, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"

interface PokemonContextProps {
    children: ReactNode
}

interface PokemonContextType {
    searchInput: string
    setSearchInput: Dispatch<SetStateAction<string>>
    query: string
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined)

export function PokemonProvider({ children }: PokemonContextProps) {
    const [searchInput, setSearchInput] = useState("")
    const query = useMemo(() => searchInput.toLowerCase().trim(), [searchInput])

    return (
        <PokemonContext.Provider value={{ searchInput, setSearchInput, query }}>
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
