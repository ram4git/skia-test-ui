import { useRouter } from "next/router";

export default function LoggedOut() {
    const router = useRouter();
    const fromUrl = router.query.from;

    const onRedirectHandle = () => {
        router.push(decodeURIComponent(fromUrl));
    }

    return (
        <div className="relative flex min-h-screen flex-col justify-center items-center overflow-hidden bg-white py-6 sm:py-12">
            <p className="text-4xl text-center font-medium text-sonetblue">You have been logged out.</p>
            <p className="mt-2 text-gray-500">You can close the tab now.</p>
            <button type="button" onClick={onRedirectHandle} className="relative group border border-sonetblue overflow-hidden opacity-100 hover:opacity-90 duration-500 transition-all ease-in-out duration-350 mt-12 w-26 rounded-lg inline-flex items-center gap-x-1.5 px-12 py-2 text-sm text-sonetblue shadow-sm hover:shadow-lg hover:bg-sonetblue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="-ml-0.5 h-6 w-6 absolute left-4 opacity-0 group-hover:opacity-100 duration-500 transition-all ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
                <span className="px-2">Reconnect</span>
            </button>
        </div >
    )
}


