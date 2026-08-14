// Import pages
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import UserDashboard from './pages/UserDashboard.tsx'

// Import components
import MainLayout from './layouts/MainLayout.tsx'

// Import libraries
import { Route, Routes } from 'react-router-dom'

// Import context
import { PokemonProvider } from './context/PokemonContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

function App() {
  return(
    <AuthProvider>
      <PokemonProvider>
        <Routes>
          {/* Pages without navbar */}
          <Route path='/login' element={<Login />} />

          {/* Pages with navbar */}
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<UserDashboard />} />
          </Route>
        </Routes>
      </PokemonProvider>
    </AuthProvider>
  )
}

export default App