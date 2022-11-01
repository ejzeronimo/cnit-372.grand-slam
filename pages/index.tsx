import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/index.module.css'


export default function render() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.logoContainer}>
        <div className={styles.field}>
          <div className={styles.anchor}></div>
        </div>
      </div>

    </div>
  )
}