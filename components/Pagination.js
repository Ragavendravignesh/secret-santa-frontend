import Link from 'next/link'

export default function Pagination({ page, total }) {
  return (
    <>
      {page > 1 && (
        <Link href={`/wishBoard?page=${page - 1}`}>
          <a>Prev</a>
        </Link>
      )}

      {page < total && (
        <Link href={`/wishBoard?page=${page + 1}`}>
          <a>Next</a>
        </Link>
      )}
    </>
  )
}
