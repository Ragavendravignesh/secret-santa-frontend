import styles from '@styles/Header.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FaPowerOff } from 'react-icons/fa'

export default function Header() {
  const [user, setUser] = useState(false)
  const route = useRouter()

  useEffect(() => {
    const value = sessionStorage.getItem('user')
    const data = value && JSON.parse(value)

    setUser(data)
  }, [])

  const logout = () => {
    sessionStorage.removeItem('user')
    setUser('')
    route.push('/')
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href={`${user ? '/wishBoard' : '/'}`}>
          <a>Secret santa</a>
        </Link>
      </div>

      <nav>
        <ul className={styles.elements}>
          {user ? (
            <>
              <li>
                <Link href='/postWish'>
                  <a>Post wish</a>
                </Link>
              </li>
              <li onClick={logout}><FaPowerOff/></li>
            </>
          ) : (
            <li>
              <Link href='/login'>
                <a>Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}
