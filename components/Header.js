import styles from '../styles/Header.module.css';
import Link from 'next/link'

const user = false;

export default function Header() {
    return <div className={styles.header}>
        <div className={styles.logo}>
            <Link href="/">
                <a>Secret santa</a>
            </Link>
        </div>

        <nav>
            <ul className={styles.elements}>
                {user ? <li>Logout</li> : (
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