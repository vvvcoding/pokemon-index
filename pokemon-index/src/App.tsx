// Import components
import Home from './pages/Home.tsx'
import NavBar from './components/custom-ui/NavBar.tsx'

// Import context
import { PokemonProvider } from './context/PokemonContext.tsx'

function App() {
  return(
    <PokemonProvider>
      <div className="h-screen flex flex-col overflow-hidden">
        <NavBar />

      <main className="flex-1 overflow-y-hidden">
        <Home />
      </main>
    </div>
    </PokemonProvider>
  )
}

export default App