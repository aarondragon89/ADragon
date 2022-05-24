import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/HomeLayout.module.css'

const HomeLayout: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ADragon ThongLe Website</title>
        <meta name="description" content="ADragon ThongLe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <h2><a href='#'>Saffon</a></h2>
          <nav>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </nav>
        </header>
        <section className="banner-area">
          <div className="banner-img"></div>
          <h1>Flexbox website</h1>
          <h3>Responsive website</h3>
          <a href="#" className='banner-btn'>Contact us</a>
        </section>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default HomeLayout
