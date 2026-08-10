// Import images
import pikachuImage from "../../../assets/images/pikachuPixel-removebg-preview.png"

function LoginRightContainer() {
    return (
        <>
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-black/10" />

            {/* Glow */}
            <div className="absolute w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl" />

            {/* Pikachu */}
            <img
                src={pikachuImage}
                alt="Pikachu"
                className="relative z-10 w-128 h-128 object-contain drop-shadow-2xl -translate-x-2"
            />

            {/* Text */}
            <div className="relative z-10 text-white">
                <h2 className="text-4xl font-bold">
                    Gotta Catch 'Em All!
                </h2>

                <p className="mt-2 text-white/80">
                    Your Pokémon journey starts here.
                </p>
            </div>
        </>
    )
}

export default LoginRightContainer