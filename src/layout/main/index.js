import Head from 'next/head'
import { NavBar } from '../../components/nav-bar'
import { Footer } from '../../components/footer'

const MAX_WIDTH = '5xl'

export function MainLayout(props) {
  const { children } = props

  return (
    <>
      <Head>
        <title>Brasvid</title>
        <meta name="description" content="Vidros curvos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar maxW={MAX_WIDTH} />
      <main className={`w-full max-w-${MAX_WIDTH} bg-gray-300 mx-auto`}>
        {children}
      </main>
      <Footer />
    </>
  )
}
