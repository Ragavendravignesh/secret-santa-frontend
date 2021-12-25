import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title={'Secret santa magical world'}>
      <div className={styles.overlay}>
        <h1 className={styles.content}>The world is not a wish granting factory!</h1>
      </div>
    </Layout>
  )
}
