import { useState } from 'react'
import Layout from '../components/Layout'
import { FaFingerprint } from 'react-icons/fa'
import styles from '../styles/login.module.css'
import { API_URL } from '../config'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function loginPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const route = useRouter()

  const resetFields = () => {
    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Password mismatch')
      return
    }

    const res = await fetch(`${API_URL}/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })

    const user = await res.json()

    if (res.ok) {
      resetFields()
      localStorage.setItem('user', JSON.stringify(user))
      route.push('/wishBoard')
    } else {
      toast.error(user.message[0].messages[0].message)
    }
  }

  return (
    <Layout title={'Login page'}>
      <ToastContainer />
      <div className={styles.card}>
        <div className={styles.logo}>
          <FaFingerprint />
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type='password'
              placeholder='Confirm password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input type='submit' value='Register' className={styles.authBtn} />
          </form>
        </div>
      </div>
    </Layout>
  )
}
