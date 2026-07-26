function SearchBar() {
    return (
        <form className="max-w-md mx-auto">   
            <div className="relative">
                <input 
                    type="search"
                    className="border relative rounded-lg p-1 text-sm" 
                    placeholder="Search" 
                    required 
                />
            </div>
        </form>
    )
}

export default SearchBar