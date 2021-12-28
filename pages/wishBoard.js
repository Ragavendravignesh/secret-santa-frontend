import Layout from '../components/Layout'
import { API_URL, PER_PAGE } from '../config/index'
import styles from '../styles/wishlist.module.css'
import Pagination from '../components/Pagination'
import WishItem from '@components/WishItem'

export default function wishBoard({ data, total, page }) {
  return (
    <Layout title={'Wishes Page | Secret santa'}>
      <div className={styles.container}>
        <h2>Hey, you can be Santa!</h2>

        {data && data.map((item) => <WishItem item={item} key={data.id} />)}

        <Pagination page={page} total={total} />
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const skip = +page === 0 ? 0 : (+page - 1) * PER_PAGE

  const res = await fetch(`${API_URL}/wishlists?_sort=created_at:ASC&_limit=${PER_PAGE}&_start=${skip}`)

  const data = await res.json()

  const totalRes = await fetch(`${API_URL}/wishlists/count`)
  const totalCount = await totalRes.json()

  const total = Math.ceil(totalCount / PER_PAGE)

  return {
    props: {
      data,
      page: +page,
      total,
    },
  }
}
