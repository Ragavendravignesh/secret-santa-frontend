import { useState } from 'react'
import Layout from '../components/Layout'
import { FaHandHoldingHeart } from 'react-icons/fa'
import styles from '../styles/login.module.css'
import Link from 'next/link'
import { API_URL } from '../config'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const route = useRouter()

  const resetFields = () => {
    setIdentifier('')
    setPassword('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    })

    const user = await res.json()

    if (res.ok) {
      resetFields()
      sessionStorage.setItem('user', JSON.stringify(user))
      route.push('/wishBoard')
    } else {
      toast.error(user.message[0].messages[0].message)
    }
  }

  return (
    <Layout title={'Login page'}>
      <ToastContainer />
      <div className={styles.card}>
        <p className={styles.registerTxt}>
          <Link href={'/register'}>Register</Link>
        </p>
        <div className={styles.logo}>
          <FaHandHoldingHeart />
        </div>
        <div className={styles.form}>
          <form>
            <input
              type='email'
              placeholder='Email'
              onChange={(e) => setIdentifier(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type='button' className={styles.authBtn} onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
