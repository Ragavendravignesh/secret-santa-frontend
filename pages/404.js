import Layout from '../components/Layout'
import styles from '../styles/404.module.css'

export default function PageNotFound() {
  return (
    <Layout title={'Page not found'}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.redText}>404</span> Not found
        </h1>
        <h4 className={styles.content}>
          {"Sorry, at the moment we couln\'t find the page you are looking for."}
        </h4>
      </div>
    </Layout>
  )
}
