import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import styles from '@styles/PostWish.module.css'
import { API_URL } from '../config/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';

export default function PostWish() {
  const [wish, setWish] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')

  const router = useRouter();

  const validate = () => {
    if (wish === '' || description === '' || address === '' || contact === '') {
      toast.error('Please fill all the fields')
    }
  }

  const getToken = () => {
    const data = sessionStorage.getItem('user')
    const value = JSON.parse(data)
    return value.jwt
  }

  const postData = async (value) => {
    const res = await fetch(`${API_URL}/wishlists`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(value),
    })

    const data = await res.json()

    return { res, data }
  }

  const resetFields = () => {
    setWish('')
    setDescription('')
    setAddress('')
    setContact('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    validate()
    const value = { wish, description, address, contact }
    const { res, data } = await postData(value)

    if (res.ok) {
      toast.success('Your wish Posted sucessfully')
      resetFields()
      router.push('/wishBoard')
    } else {
      toast.error(data.message[0].messages[0].message)
    }
  }

  return (
    <Layout title={'Post your wish | Secret Santa'}>
      <ToastContainer />
      <div className={styles.postForm}>
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
              id='descripition'
              name='description'
              rows={4}
              cols={50}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              id='address'
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor='contact'>Contact</label>
            <input
              type='text'
              name='contact'
              id='contact'
              onChange={(e) => setContact(e.target.value)}
              value={contact}
            />
          </div>

          <input type='submit' className={styles.postWishBtn} value='Submit' />
        </form>
      </div>
    </Layout>
  )
}
