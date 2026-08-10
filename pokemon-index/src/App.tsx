// Import pages
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'

// Import components
import MainLayout from './layouts/MainLayout.tsx'

// Import libraries
import { Route, Routes } from 'react-router-dom'

// Import context
import { PokemonProvider } from './context/PokemonContext.tsx'

function App() {
  return(
    <PokemonProvider>
      {/* <div className="h-screen flex flex-col overflow-hidden">
        <NavBar />
          <main className="flex-1 overflow-y-hidden">
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </main>
      </div> */}

      <Routes>
        {/* Pages without navbar */}
        <Route path='/login' element={<Login />} />

        {/* Pages with navbar */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </PokemonProvider>
  )
}

export default App