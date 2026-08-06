import { Search } from "lucide-react"

function SearchBar() {
    return (
        <form className="max-w-md mx-auto">
            <div className="relative">
                <Search 
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                />
                <input
                    type="search"
                    className="border rounded-lg p-2 pl-8 text-sm"
                    placeholder="Search"
                    onChange={(e) => e.preventDefault()}
                    required
                />
            </div>
        </form>
    )
}

export default SearchBar