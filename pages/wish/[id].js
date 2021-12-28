import { useRouter } from 'next/router'
import { API_URL } from '@config/index'
import { useState, useEffect } from 'react'
import Layout from '@components/Layout'
import styles from '@styles/wish.module.css'
import { FaBell } from 'react-icons/fa'

export default function BlishPage() {
  const [wish, setWish] = useState('')
  const router = useRouter()
  const { id } = router.query

  const fetchData = async () => {
    const res = await fetch(`${API_URL}/wishlists/${id}`)

    const wishData = await res.json()

    setWish(wishData)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Layout title={'Wish page | Secret Santa'}>
      <div className={styles.wishCard}>
        <div className={styles.contentCard}>
          <div className={styles.contentRow}>
            <p className={styles.boldText}>Wish :</p><p>{wish.wish}</p>
          </div>
          <div className={styles.contentRow}>
            <p className={styles.boldText}>Description :</p><p>{wish.description}</p>
          </div>
          <div className={styles.contentRow}>
            <p className={styles.boldText}>Address :</p><p>{wish.address}</p>
          </div>
          <div className={styles.contentRow}>
            <p className={styles.boldText}>Contact :</p><p>{wish.contact} </p>
          </div>
        </div>
        <div className={styles.logo}>
          <FaBell />
        </div>
      </div>
    </Layout>
  )
}
