import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Service Level Up</title>
        <meta name="description" content="Service Level Up (SLU)" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Service Level Up!
        </h1>

        <p className={styles.description}>
          Increasing good service has never been as fun!
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.embengineering.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright ©️ 2022 EMB Engineering
        </a>
      </footer>
    </div>
  )
}
