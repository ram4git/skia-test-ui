import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { useEffect } from 'react'

import styles from '../styles/Home.module.css'

export default function Img1() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Sonet</title>
                <meta name="description" content="sonet demo UI" />
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <main className='h-screen w-screen flex justify-center   '>
                <div className="max-w-4xl w-full bg-red-500 flex justify-center items-center h-screen border-2">
                    <div className=""><p className="text-left text-gray-800 text-4xl">Hello</p></div>
                </div>
            </main>
        </div>
    )
}
