export function HeroSection() {
  return (
    <div className="flex flex-col items-start">
      <p className="text-4xl font-extrabold tracking-wider mb-2 text-white">
        Brasvid
      </p>
      <p className="max-w-sm mb-4 text-primary-light tracking-wider">
        Vestibulum sollicitudin ipsum id mi tempus, sed semper tortor eleifend.
        Donec mollis id arcu quis euismod.
      </p>
      <button className="rounded-xl flex items-center justify-center px-6 py-1 text-center transition duration-150 focus:outline-none text-lg disabled:cursor-not-allowed uppercase font-bold text-white border-2 border-white">
        fale conosco
      </button>
    </div>
  )
}
