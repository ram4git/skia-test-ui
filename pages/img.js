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
                    <div className=' grid grid-flow-col-dense justify-center pt-16'>
                        <div className=" h-36 w-36 border-2 border-blue-800 rounded-md"></div>
                        <div className=" h-36 w-36 rounded-full border-8 border-green-900"></div>
                        <div className=" h-32 w-32 bg-red-600 rotate-45 transform origin-center"></div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1652662946272-5426d1cd6f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" className="h-48 w-full object-cover my-4 rounded-lg" alt="image" />
                    <h1 className="text-center text-lg text-gray-900 py-2">The quick brown fox <span className='bold text-xl text-blue-900'>jumps</span> over the <span className=' font-thin font-mono text-green-900'>lazy</span> dog</h1>
                    <div className='max-w-lg mt-8'>
                        <p> {`
                          Corinna was from Tanagra[a] in Boeotia.[4] The Suda, a tenth-century encyclopedia, records that she was the daughter of Acheloodorus and Procratia, and was nicknamed Myia (Μυῖα, "the fly").[1] According to ancient tradition, she lived during the fifth century BC.[5] She was supposed to have been a contemporary of Pindar, either having taught him, or been a fellow-pupil of Myrtis of Anthedon with him.[b][7] Corinna was said to have competed with Pindar, defeating him in at least one poetry competition, though some sources claim five.[c][7][9]

Since the early twentieth century, scholars have been divided over the accuracy of the traditional chronology of Corinna's life.[10] One of the first scholars to question this was Edgar Lobel,[11] who in 1930 concluded that there is no reason to believe she predated the orthography used on the Berlin papyrus, on which fragments of two of her poems are preserved.[d][14] The debate over Corinna's date has dominated scholarship since,[15] and the evidence remains inconclusive.[16] Sceptics of the traditional chronology argue that there is no ancient mention of Corinna before the first century BC, and that the orthography of her surviving poetry was not established until after the mid-fourth century.[17] This is the most common view,[18] with Martin Litchfield West[19] and David A. Campbell[20] among those who believe a late date for Corinna. Campbell concludes that a third-century date is "almost certain".[21]

The alternative view, accepting the traditional fifth-century date, is set forth by scholars such as Archibald Allen and Jiří Frel.[22] If the traditional date is correct, the lack of ancient reference to Corinna before the first century, and the later orthography, could both be explained by her being of only local interest before the Hellenistic period. According to this theory, when she was rediscovered and popularised in the Hellenistic period her poetry would have been re-spelled into contemporary Boeotian orthography, as her original fifth-century orthography was too unfamiliar to a third-century audience.[23] An apparent terminus ante quem is established by the second-century AD theologian Tatian, who says in his Address to the Greeks that the fourth-century sculptor Silanion made a portrait-statue of Corinna.[24] A Roman-era copy of a fourth-century statue in the Musée Vivenel in Compiègne, France, is identified by an inscription on the base as depicting Corinna, and is widely accepted by archeologists as a copy of Silanion's sculpture.[25] Philologists continue to regard this attribution with what Thea S. Thorsen describes as "unwarranted scepticism".[26] West, for instance, accepts that the Compiègne statuette is a copy of a fourth-century work, but suggests that it was not originally intended to depict Corinna, only gaining that association in the Roman period.[27] Thorsen argues that the sculpture was always intended as an image of Corinna, noting that the figure is shown with five scrolls that match the five books of poetry attributed to Corinna in antiquity.[
                      `}</p>
                        <div className="flex flex-row text-green-700">
                            <svg className="w-1/3 h-auto aspect-square" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg>
                            <svg className="w-1/3 h-auto aspect-square" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                            <svg className="w-1/3 h-auto aspect-square" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                            </svg>
                        </div>
                        <div className="flex flex-row text-blue-700">
                            <svg className="flex flex-rwo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                            </svg>
                            <svg className="flex flex-rwo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                            </svg>
                            <svg className="flex flex-rwo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                            </svg>
                        </div>
                        <p className="text-center text-bold text-blue-500 font-sans py-8">sonet.io - cyber security simplified!</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
