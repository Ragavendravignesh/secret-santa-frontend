import styles from '@styles/WishItem.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaPagelines } from 'react-icons/fa'

export default function WishItem({ item }) {
  const router = useRouter()
  return (
    <Link href={`/wish/${item.id}`}>
      <div className={styles.wishItem}>
        <h3>{item.wish}</h3>
        <div className={styles.wishContent}>
          <p>
            {item.description.substring(0, 100)}...
            <Link href={`/wish/${item.id}`}>
              <a className={styles.readMoreTxt}>Read more</a>
            </Link>
          </p>
          <div className={styles.icon}>
            <FaPagelines />
          </div>
        </div>
      </div>
    </Link>
  )
}
