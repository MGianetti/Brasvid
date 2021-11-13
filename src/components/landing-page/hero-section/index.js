import Image from 'next/image'

export function HeroSection() {
  return (
    <div className="flex flex-col items-start relative w-full pt-24 pb-80">
      <p className="text-4xl font-extrabold tracking-wider mb-2 text-white">
        Brasvid
      </p>
      <p className="max-w-sm mb-4 text-primary-dimmed tracking-wider">
        Vestibulum sollicitudin ipsum id mi tempus, sed semper tortor eleifend.
        Donec mollis id arcu quis euismod.
      </p>
      <button className="rounded-xl flex items-center justify-center px-6 py-1 text-center transition duration-150 focus:outline-none text-lg disabled:cursor-not-allowed uppercase font-bold text-white border-2 border-white hover:bg-white hover:bg-opacity-10">
        fale conosco
      </button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <Image
          aria-hidden="true"
          src="/glass.png"
          alt=""
          width="477px"
          height="286px"
          className="scale-75"
        />
      </div>
      <div className="absolute bottom-32 right-16 z-40">
        <Image
          aria-hidden="true"
          src="/glass.png"
          alt=""
          width="477px"
          height="286px"
          className="scale-75"
        />
      </div>
      <div className="absolute bottom-44 right-0 z-30">
        <Image
          aria-hidden="true"
          src="/glass.png"
          alt=""
          width="477px"
          height="286px"
          className="scale-75"
        />
      </div>
      <div className="absolute bottom-52 -right-16 z-20">
        <Image
          aria-hidden="true"
          src="/glass.png"
          alt=""
          width="477px"
          height="286px"
          className="scale-75"
        />
      </div>
    </div>
  )
}
