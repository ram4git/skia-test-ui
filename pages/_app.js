import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        window.__be = window.__be || {};
        window.__be.id = "6362751136e08c0007252a6f";
        (function () {
            var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
            be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
        })();
    }, [])
  return <Component {...pageProps} />
}

export default MyApp
