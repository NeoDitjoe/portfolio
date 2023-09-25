import Layout from '@/components/layout/layout'
import 'styles/global.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>

      <Head>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/posts/mastering-javascript/mastering-js-thumb.png" />
      </Head>
      
      <Component {...pageProps} />
    </Layout>
  )
}