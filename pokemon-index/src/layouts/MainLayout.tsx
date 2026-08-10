import { Outlet } from 'react-router-dom'
import NavBar from '../components/custom-ui/NavBar'

function MainLayout() {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <NavBar />

            <main className="flex-1 overflow-y-hidden">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout