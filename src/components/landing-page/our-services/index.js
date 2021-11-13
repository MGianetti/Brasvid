import Image from 'next/image'
import AwesomeSlider from 'react-awesome-slider'

export function OurServices() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center max-w-md">
        <p className="text-4xl font-extrabold tracking-wider mb-2 text-primary">
          Nossos serviços
        </p>
        <AwesomeSlider className="mt-6 mb-12">
          <div>
            <Image src="/glass.png" alt="glass" height={286} layout="fill" />
          </div>
          <div>
            <Image src="/glass.png" alt="glass" height={286} layout="fill" />
          </div>
          <div>
            <Image src="/glass.png" alt="glass" height={286} layout="fill" />
          </div>
        </AwesomeSlider>
        <p className="mb-4 text-primary-light tracking-wider">
          Vestibulum sollicitudin ipsum id mi tempus, sed semper tortor
          eleifend. Donec mollis id arcu quis euismod. Duis ornare tincidunt
          sem, at tempus tellus ultricies ac. Nunc interdum metus ac lectus
          laoreet, sed auctor lacus fermentum. Praesent convallis tempus
          aliquet. Morbi sed lorem sed sem viverra pulvinar.
        </p>
        <button className="rounded-xl flex items-center justify-center px-6 py-1 text-center transition duration-150 focus:outline-none text-lg disabled:cursor-not-allowed uppercase font-bold text-primary border-2 border-primary">
          orçamento
        </button>
      </div>
    </div>
  )
}
