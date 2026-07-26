import './App.css'
import Home from './pages/Home.tsx'
import NavBar from './components/custom-ui/NavBar.tsx'

function App() {
  return(
    <div className="h-screen flex flex-col overflow-hidden">
      <NavBar />

      <main className="flex-1 overflow-y-hidden">
        <Home />
      </main>
    </div>
  )
}

export default App