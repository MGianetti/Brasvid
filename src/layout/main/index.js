import Head from 'next/head'
import { NavBar } from '../../components/nav-bar'
import { Footer } from '../../components/footer'

export function MainLayout(props) {
  const { children } = props

  return (
    <>
      <Head>
        <title>Brasvid</title>
        <meta name="description" content="Vidros curvos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="w-full max-w-4xl mx-auto">{children}</main>
      <Footer />
    </>
  )
}
