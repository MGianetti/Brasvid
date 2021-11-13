import Image from 'next/image'

export function Footer() {
  return (
    <div className="bg-pink-300 flex flex-col items-center">
      <Image src="/logo.svg" alt="logo" height={30} width={30} />
      <span>Brasvid</span>
    </div>
  )
}
