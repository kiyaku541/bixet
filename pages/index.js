import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>認証完了</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="完了" />
        <p className="plane_text">
          認証完了です。
        </p>
      </main>

      <Footer />
    </div>
  )
}
