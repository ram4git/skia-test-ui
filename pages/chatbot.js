import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { useEffect } from 'react'

import styles from '../styles/Home.module.css'

export default function Img1() {

    useEffect(() => {
        window.__be = window.__be || {};
        window.__be.id = "6362751136e08c0007252a6f";
        (function () {
            var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
            be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
        })();
    }, []);

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
                <div className="grid grid-flow-row-dense w-96">
                    <div className="h-96 bg-red-200 my-4"></div>
                    <p className="text-center text-gray-800">Hello world!</p>
                </div>
            </main>
        </div>
    )
}
