import { useRouter } from 'next/router'
import { API_URL } from '@config/index'
import Layout from '@components/Layout'
import styles from '@styles/wish.module.css'
import { FaBell } from 'react-icons/fa'

export default function WishPage({ data }) {
  return (
    <Layout title={'Wish page | Secret Santa'}>
      <div className={styles.wishCard}>
        <div className={styles.contentCard}>
          <div className={styles.contentRow}>
            <p className={styles.boldText}>Wish&nbsp;:</p>
            <p>{data.wish}</p>
          </div>
          <div className={styles.contentRow}>
            <p className={styles.boldText}>Description&nbsp;:</p>
            <p>{data.description}</p>
          </div>
          <div className={styles.contentRow}>
            <p className={styles.boldText}>Address&nbsp;:</p>
            <p>{data.address}</p>
          </div>
          <div className={styles.contentRow}>
            <p className={styles.boldText}>Contact&nbsp;:</p>
            <p>{data.contact} </p>
          </div>
        </div>
        <div className={styles.logo}>
          <FaBell />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/wishlists/${id}`)

  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
