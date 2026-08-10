// Import components
import Home from './pages/Home.tsx'
import NavBar from './components/custom-ui/NavBar.tsx'

// Import libraries
import { Route, Routes } from 'react-router-dom'

// Import context
import { PokemonProvider } from './context/PokemonContext.tsx'

function App() {
  return(
    <PokemonProvider>
      <div className="h-screen flex flex-col overflow-hidden">
        <NavBar />
          <main className="flex-1 overflow-y-hidden">
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </main>
      </div>
    </PokemonProvider>
  )
}

export default App