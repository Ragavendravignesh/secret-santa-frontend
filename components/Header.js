import styles from '../styles/Header.module.css';
import Link from 'next/link'
import {useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
    const [user, setUser] = useState('');
    const route = useRouter();

    useEffect(() => {
        const value = localStorage.getItem('user');
        const data = value && JSON.parse(value)

        setUser(data);
    }, []) 

    const logout = () => {
        localStorage.removeItem('user');
        setUser('');
        route.push('/')
    }

    return <div className={styles.header}>
        <div className={styles.logo}>
            <Link href="/">
                <a>Secret santa</a>
            </Link>
        </div>

        <nav>
            <ul className={styles.elements}>
                {user ? <li onClick={logout}>Logout</li> : (
                    <li>
                       <Link href='/login'>
                           <a>Login</a>
                       </Link>
                    </li>
                ) }
            </ul>
        </nav>
    </div>
}