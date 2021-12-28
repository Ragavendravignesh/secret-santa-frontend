import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import styles from '@styles/PostWish.module.css'

export default function PostWish() {
  const [wish, setWish] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Layout title={'Post your wish | Secret Santa'}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor='wish'>Wish</label>
          <input
            type='text'
            name='wish'
            id='wish'
            onChange={(e) => setWish(e.target.value)}
            value={wish}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor='description'>Description</label>
          <textarea
            id="descripition"
            name="description"
            rows={4}
            cols={50}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div><div className={styles.formControl}>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            id='address'
            onChange={(e) => setWish(e.target.value)}
            value={wish}
          />
        </div><div className={styles.formControl}>
          <label htmlFor='contact'>Contact</label>
          <input
            type='text'
            name='contact'
            id='contact'
            onChange={(e) => setContact(e.target.value)}
            value={contact}
          />
        </div>
      </form>
    </Layout>
  )
}
