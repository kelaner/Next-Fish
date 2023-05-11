import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
          <Head>
          <title>UI/UX</title>
                <link rel="icon" href="/favicon.ico" />
          </Head>

    </main>
  )
}
