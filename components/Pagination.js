import Link from 'next/link'
import styles from '@styles/Pagination.module.css'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

export default function Pagination({ page, total }) {
  return (
    <>
      <div className={styles.pagination}>
      {page > 1 && (
        <Link href={`/wishBoard?page=${page - 1}`}>
          <a className='btn-secondary'><span className='ltIcon'><FaLessThan/>Prev</span></a>
        </Link>
      )}

      {page < total && (
        <Link href={`/wishBoard?page=${page + 1}`}>
          <a className='btn-secondary'><span className='gtIcon'><FaGreaterThan/>Next</span></a>
        </Link>
      )}
      </div>
    </>
  )
}
