// Import components
import { Button } from "../components/ui/button"
import ScrollButton from "../components/custom-ui/home-ui/ScrollButton"

// Import libraries
import { useNavigate } from "react-router-dom"

// Import images
import StarterPokemon from '../assets/images/pokemontocut-removebg-preview.png'

function Home() {

    const navigate = useNavigate()

    return (
        <div className="relative h-full w-full overflow-x-hidden overflow-y-auto">

            {/* Decorative Poké Balls */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full border-[30px] border-red-500/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border-[30px] border-red-500/10" />

            {/* Main content */}
            <div className="relative z-10 flex h-full w-full items-center justify-center px-6">

                {/* Hero card */}
                <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm md:flex-row">

                    {/* Left container */}
                    <div className="flex flex-1 flex-col justify-center p-10 text-left md:p-14">

                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
                            Welcome to the
                        </p>

                        <h1 className="text-5xl font-black tracking-tight text-gray-900 md:text-6xl">
                            Pokémon
                            <span className="block text-red-500">
                                Index
                            </span>
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
                            Explore Pokémon from every generation, discover their
                            abilities, types, stats, and more.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button
                                onClick={() => navigate('/dashboard')}
                                className="rounded-xl px-6 py-3"
                            >
                                Explore Pokémon
                            </Button>
                        </div>

                    </div>

                    {/* Right container*/}
                    <div className="relative flex flex-1 items-center justify-center bg-gradient-to-br from-red-400 to-red-600 p-8 md:min-h-[500px]">

                        {/* Background circle */}
                        <div className="absolute h-72 w-72 rounded-full bg-white/10 md:h-96 md:w-96" />

                        {/* Pokéball-like decoration */}
                        <div className="absolute h-48 w-48 rounded-full border-[16px] border-white/10 md:h-64 md:w-64" />

                        <img
                            src={StarterPokemon}
                            alt="Starter Pokémon"
                            className="relative z-10 w-72 max-w-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105 md:w-96"
                        />

                    </div>

                </div>
            </div>

            {/* Scroll to learn more */}
            <div className="flex justify-center">
                <ScrollButton />
            </div>
        </div>
    )
}

export default Home