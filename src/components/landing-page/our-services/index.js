import Image from 'next/image'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider)

export function OurServices() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-extrabold tracking-wider mb-12 text-primary">
          Nossos serviços
        </p>
        <AwesomeSlider>
          <div>
            <Image src="/banner.png" alt="glass" height="286px" width="477px" />
            <p className="mb-4 text-primary-light tracking-wider">
              Vestibulum sollicitudin ipsum id mi tempus, sed semper tortor
              eleifend. Donec mollis id arcu quis euismod. Duis ornare tincidunt
              sem, at tempus tellus ultricies ac. Nunc interdum metus ac lectus
              laoreet, sed auctor lacus fermentum. Praesent convallis tempus
              aliquet. Morbi sed lorem sed sem viverra pulvinar.
            </p>
          </div>
          <div>
            <Image src="/glass.png" alt="glass" height="286px" width="477px" />
          </div>
        </AwesomeSlider>

        <button className="rounded-xl flex items-center justify-center px-6 py-1 text-center transition duration-150 focus:outline-none text-lg disabled:cursor-not-allowed uppercase font-bold text-primary border-2 border-primary">
          orçamento
        </button>
      </div>
    </div>
  )
}
