import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Test() {
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
                <h1 className="text-center text-lg text-gray-900 py-2">The quick brown fox <span className='bold text-xl text-blue-900'>jumps</span> over the <span className=' font-thin font-mono text-green-900'>lazy</span> dog</h1>
            </div>
        </main>
    </div>
  )
}
