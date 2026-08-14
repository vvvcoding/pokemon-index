// Import libraries
import { useEffect, useState } from 'react'

// Import components
import CardContainer from "../components/custom-ui/CardContainer"
import Footer from "../components/custom-ui/Footer"
import SearchBar from '../components/custom-ui/SearchBar'
import StatsContainer from '../components/custom-ui/dashboard-ui/StatsContainer'

// Import context
import { usePokemonContext } from "../context/PokemonContext"
import { useAuth } from '@/context/AuthContext'
import DropDownFilterGeneration from '../components/custom-ui/dashboard-ui/DropDownFilterGeneration'

function UserDashboard() {

    const { user } = useAuth()
    const [currentPage, setCurrentPage] = useState(1)
    const { totalPages } = usePokemonContext()

    const displayName = user?.displayName || user?.email?.split("@")[0] || "User"

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages)
        }
    }, [currentPage, totalPages])

    return (
        <div className="h-full flex flex-col">

            <div className="flex-1 min-h-0 flex">

                {/* Sidebar */}
                <aside className="w-80 flex-shrink-0 p-6 sticky top-20 border-r">
                    <div className="h-full w-full flex flex-col items-center gap-4">
                        
                        <div className="flex flex-col items-center gap-4">
                            {/* User's name */}
                            <h1>{displayName}</h1>

                            {/* Search bar */}
                            <SearchBar />
                            
                            {/* Generation dropdown */}
                            <DropDownFilterGeneration />
                        </div>

                        {/* Stats */}
                        <div className="mt-auto">
                            <StatsContainer />
                        </div>
                    </div>
                </aside>

                {/* Card container */}
                <div className="flex-1 min-h-0 overflow-y-auto py-8">
                    <div className="px-8 py-6">
                        <CardContainer 
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
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

export default UserDashboard