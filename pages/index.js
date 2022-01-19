import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cazare Nemes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Comming Soon!" />
        <p className="description">
        </p>
      </main>

    </div>
  )
}
