import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Layout({ children, title, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
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
