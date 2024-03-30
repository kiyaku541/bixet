import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bixet" />
        <p className="plane_text">
          アプリを開いています。</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
