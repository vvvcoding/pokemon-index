// Import libraries
import { useEffect, useState } from 'react'

// Import components
import CardContainer from "../components/custom-ui/CardContainer"
import Footer from "../components/custom-ui/Footer"

// Import context
import { usePokemonContext } from "../context/PokemonContext"

function Home() {

    const [currentPage, setCurrentPage] = useState(1)
    const { totalPages } = usePokemonContext()

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages)
        }
    }, [currentPage, totalPages])

    return (
        <div className="h-full flex flex-col">

            {/* Pokemon Container */}
            <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="px-20 py-10">
                    <CardContainer 
                        currentPage={currentPage}
                    />
                </div>
            </div>

            {/* Pagination */}
            <div className="border-t py-3">
                <Footer 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default Home