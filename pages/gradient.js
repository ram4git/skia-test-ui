import Head from 'next/head'

export default function Gradient() {
  return (
    <>
      <Head>
        <title>Sonet</title>
        <meta name="description" content="sonet demo UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <main className='h-screen w-screen max-w-4xl mx-auto grid justify-center items-center bg-blue-100 overflow-hidden'>
              <p className='font-mono text-lg text-gray-900 uppercase'>Layer 0</p>
              <div className='p-20 rounded-lg my-8 bg-gradient-to-r from-cyan-500 to-blue-500'>
                                <p className='font-mono text-lg text-gray-900 uppercase'>Layer 1</p>

                  <div className='w-full max-w-3xl bg-gradient-to-r from-red-400 to-green-500 p-8 m-8 rounded-3xl grid place-items-center space-x-1 space-y-2'>
                                    <p className='font-mono text-lg text-gray-900 uppercase'>Layer 2</p>

                    <div className='w-48 h-48 shadow-lg rounded-sm  bg-gradient-to-tr from-red-500 via-blue-500 to-green-800'></div>
                    <div className='w-48 h-48 shadow-lg rounded-sm  bg-gradient-to-tr from-red-500 via-blue-500 to-green-800'></div>
                    <div className='w-48 h-48 shadow-lg rounded-sm  bg-gradient-to-tr from-red-500 via-blue-500 to-green-800'></div>
                  </div>
                <div className='w-full max-w-3xl bg-gradient-to-r from-red-400 to-green-500 p-8 m-8 rounded-3xl grid place-items-center space-x-1 space-y-2'>
                    <div className='w-48 h-48 shadow-lg rounded-sm  bg-gradient-to-tr from-red-500 via-blue-500 to-green-800'></div>
                    <div className='w-48 h-48 shadow-lg rounded-sm  bg-gradient-to-tr from-red-500 via-blue-500 to-green-800'></div>
                    <div className='w-48 h-48 shadow-lg rounded-sm  bg-gradient-to-tr from-red-500 via-blue-500 to-green-800'></div>
                  </div>
            </div>
        </main>
    </>
  )
}
