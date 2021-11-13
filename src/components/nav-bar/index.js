import BrasvidLogo from '../../assets/logo.svg'

export function NavBar() {
  return (
    <div className="flex flex-col">
      <div className="w-full max-w-4xl mx-auto flex items-center space-x-8 py-2">
        <BrasvidLogo className="w-8 h-8" />
        <div className="sm:hidden md:flex items-center space-x-8 text-white tracking-wider">
          <span className="text-primary-dimmed">Início</span>
          <span>Serviços</span>
          <span>Contato</span>
          <span>Missão</span>
          <span>Sobre a empresa</span>
        </div>
        <div className="sm:block md:hidden">hb</div>
      </div>
    </div>
  )
}
