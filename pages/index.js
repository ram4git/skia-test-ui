import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
    return (
        <div>
            <Script
                src="https://config.confirmic.com/config.js?id=prj:637daf03-878a-49bf-a025-3e4c8708a2f2"
                crossorigin
                charset="utf-8"
            />
            <Script src="https://consent-manager.confirmic.com/embed.js" crossorigin charset="utf-8" />
            <div>
                <a href="https://sonet.okta.com">Sonet OKTA</a>
                <a href="https://jira.com">JIRA</a>
            </div>
            <p>Its a wonderful day to inspect skia</p>
        </div>)
}
