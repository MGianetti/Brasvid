export function NavBar(props) {
  const { maxW } = props

  return (
    <div className="bg-blue-300">
      <div className={`w-full max-w-${maxW} mx-auto`}>NAV</div>
    </div>
  )
}
