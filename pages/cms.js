import Head from 'next/head'


export default function cms() {
  return (
    <>
      <Head>
        <title>CMS</title>
        <meta name="description" content="sonet demo UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className='h-screen w-screen relative flex flex-row'>
            <div className="left-col bg-blue-200 rounded-md h-screen">
                <div className="field">
                    <label>label</label>
                    <input placeholder='enter a value' type="text"></input>
                </div>
                <div className="field">
                    <label>label</label>
                    <input placeholder='enter a value' type="number"></input>
                </div>
                <div className="field">
                    <label>label</label>
                    <input placeholder='enter a value' type="text"></input>
                </div>
            </div>
            <div className="right-col w-full h-screen bg-green-200 flex-grow flex justify-start">
                <div className="h-96 w-96 bg-red-200 flex justify-center items-center">
                    <div className="h-48 w-48 rounded-full bg-blue-600"></div>
                </div>
            </div>
        </main>
    </>
  )
}
