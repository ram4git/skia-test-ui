import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
    return (
        <div>
            <Script
                id="onload-id"
                onLoad={() => {
                    window.__be = window.__be || {};
                    window.__be.id = "6362751136e08c0007252a6f";
                    (function () {
                        var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
                        be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
                        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
                    })();
                }}
            />
            <div>
                <a href="https://sonet.okta.com">Sonet OKTA</a>
                <a href="https://jira.com">JIRA</a>
            </div>
            <p>Its a wonderful day to inspect skia</p>
        </div>)
}
