import styles from '@styles/WishItem.module.css'
import Link from 'next/link'
import { FaPagelines } from 'react-icons/fa'

export default function WishItem({ data }) {
  return (
    <Link href={`/wish/${data.id}`}>
      <div className={styles.wishItem}>
        <h3>{data.wish}</h3>
        <div className={styles.wishContent}>
          <p>
            {data.description.substring(0, 100)}...
            <Link href={`/wish/${data.id}`}>
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
