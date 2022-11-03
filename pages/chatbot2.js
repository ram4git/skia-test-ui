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
                            <Script
					src="https://config.confirmic.com/config.js?id=prj:637daf03-878a-49bf-a025-3e4c8708a2f2"
					crossorigin
					charset="utf-8"
				/>
				<Script src="https://consent-manager.confirmic.com/embed.js" crossorigin charset="utf-8" />

            <main className='h-screen w-screen max-w-4xl bg-gray-500'>
                <div className="grid grid-flow-row-dense w-96">
                    <p className="text-left text-gray-800 text-4xl">Hello</p>
                </div>
            </main>
        </div>
    )
}
