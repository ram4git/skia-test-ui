import Head from 'next/head'
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
					crossOrigin
					charset="utf-8"
				/>
				<Script src="https://consent-manager.confirmic.com/embed.js" crossorigin charset="utf-8" />

            <main className='h-screen w-screen flex justify-center   '>
                <div className="max-w-4xl w-full bg-red-500 flex justify-center items-center h-screen border-2">
                    <div className=""><p className="text-left text-gray-800 text-4xl">Hello</p></div>
                </div>
            </main>
        </div>
    )
}
