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

            <div className={styles.header}>
                <div className={styles.headone}>
                    <div className={styles.logos}>
                        <div className={styles.lab}></div>
                        <div className={styles.logo}></div>
                    </div>
                    <div className={styles.sections}></div>
                    <div className={styles.index}></div>
                </div>
                <div className={styles.headtwo}></div>
                <div className={styles.headthree}></div>
                <div className={styles.headhide}></div>
            </div>

            {/* 一个分割线 */}

            <div className={styles.text}>
                
            </div>


        </main>
    )
}
