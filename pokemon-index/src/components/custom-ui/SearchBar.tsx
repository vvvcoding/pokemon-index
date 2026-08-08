import { Search } from "lucide-react"
import { usePokemonContext } from "../../context/PokemonContext"

function SearchBar() {
    const { searchInput, setSearchInput } = usePokemonContext()

    return (
        <form className="max-w-md mx-auto" onSubmit={(event) => event.preventDefault()}>
            <div className="relative">
                <Search 
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                />
                <input
                    type="search"
                    className="border rounded-lg p-2 pl-8 text-sm"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
        </form>
    )
}

export default SearchBar