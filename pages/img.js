import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function img1() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sonet</title>
        <meta name="description" content="sonet demo UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <main className='h-screen w-screen max-w-4xl mx-auto grid justify-center items-center'>
              <div className="grid grid-flow-row-dense ">
                <div className=' grid grid-flow-col-dense justify-center'>
                    <div className=" h-36 w-36 border-2 border-blue-800 rounded-md"></div>
                    <div className=" h-36 w-36 rounded-full border-8 border-green-900"></div>
                    <div className=" h-32 w-32 bg-red-600 rotate-45 transform origin-center"></div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1652662946272-5426d1cd6f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" className="h-48 w-full object-cover my-4 rounded-lg" alt="image" />
                <h1 className="text-center text-lg text-gray-900 py-2">The quick brown fox <span className='bold text-xl text-blue-900'>jumps</span> over the <span className=' font-thin font-mono text-green-900'>lazy</span> dog</h1>
            </div>
        </main>
    </div>
  )
}
