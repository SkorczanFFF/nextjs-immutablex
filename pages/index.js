import Head from 'next/head'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import styles from '../styles/Home.module.css'
import Cards from '../components/Cards/Cards'
import Pagination from '../components/Pagination/Pagination'

export default function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10;

  useEffect(() => {
    const getData = async() => {
      setLoading(true)
      await fetch("https://api.x.immutable.com/v1/assets?collection=0xacb3c6a43d15b907e8433077b6d38ae40936fe2c", {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json"
        }
      })
      .then((res) => res.json())
      .then((res) => {
        setData(res.result)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
      })
    }
    getData()
    Modal.setAppElement('body')
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className={styles.container}>
      <Head>
        <title>Anfata Games | Maciej Skorus vs ImmutableX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <p className={styles.logo}><b>ImmutableX</b></p>
      </nav>

      <main className={styles.main}>

        <Cards data={currentPosts} loading={loading} />
        
        <div className={styles.pagination}>
          <Pagination 
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </div>

      </main>
    </div>
  )
}
