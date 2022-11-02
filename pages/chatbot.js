import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from '../styles/Home.module.css'

export default function img1() {
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

            <main className='h-screen w-screen max-w-4xl mx-auto grid justify-center items-center'>
                <div className="grid grid-flow-row-dense ">
                    <div className=' grid grid-flow-col-dense justify-center pt-16'>
                        <div className=" h-36 w-36 border-2 border-blue-800 rounded-md"></div>
                        <div className=" h-36 w-36 rounded-full border-8 border-green-900"></div>
                        <div className=" h-32 w-32 bg-red-600 rotate-45 transform origin-center"></div>
                    </div>
                    <h1 className="text-center text-lg text-gray-900 py-2">The quick brown fox <span className='bold text-xl text-blue-900'>jumps</span> over the <span className=' font-thin font-mono text-green-900'>lazy</span> dog</h1>
                </div>
            </main>
        </div>
    )
}
