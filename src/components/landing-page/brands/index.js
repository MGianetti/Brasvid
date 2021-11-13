function BrandContainer(props) {
  const { children } = props

  return (
    <div className="w-full h-20 bg-red-50 border-red-500 border">
      {children}
    </div>
  )
}

export function Brands() {
  return (
    <div className="flex flex-col">
      <p className="text-4xl font-extrabold tracking-wider mb-4 text-primary text-center">
        Marcas
      </p>
      <div className="grid grid-cols-4 gap-4">
        <BrandContainer />
        <BrandContainer />
        <BrandContainer />
        <BrandContainer />
        <BrandContainer />
        <BrandContainer />
        <BrandContainer />
        <BrandContainer />
        <BrandContainer />
        <BrandContainer />
        <BrandContainer />
        <BrandContainer />
        <div />
        <BrandContainer />
        <BrandContainer />
      </div>
    </div>
  )
}
