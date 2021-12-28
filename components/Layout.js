import Header from '@components/Header'
import Footer from '@components/Footer'
import Head from 'next/head'

export default function Layout({ children, title, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Secret santa magical board',
  description: 'Write your wishes and see it comes true.',
  keywords: 'magic, wishes, secret, project',
}
