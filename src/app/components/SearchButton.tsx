import { Search } from 'lucide-react'

const SearchButton = () => {
    return (
        <button
            type="submit"
            aria-label="Search"
            className="bg-main-orange md:w-80 md:h-80 md:p-24 w-50 h-50 
            text-white rounded-xl 
            flex items-center justify-center transition-all duration-200  
            "
        >
            <Search className="md:w-32 md:h-32 w-16 h-16"/>
        </button>
    )
}

export default SearchButton