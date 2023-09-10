
import { useRouter } from 'next/router'

export default function Blocked() {
    const router = useRouter()
    const { title, reason, resolution, tag } = router.query

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-blue-50 py-6 sm:py-12">
                <div className="relative sm:mx-auto sm:max-w-lg">
                    <div className="text-center absolute right-0 -bottom-1 -z-0 flex flex-row animate-pulse">

                        <span className="py-1 px-4 pt-2 mr-4 bg-red-500 text-xs fontLight text-white text-left uppercase rounded-b-md tracking-wider">
                            { tag || 'URL is blocked' }
                        </span>
                    </div>
                    <div className="bg-white px-2 pt-6 shadow  sm:rounded-lg mb-4 z-10 relative inset-0">
                    <div className="-pl-8 -translate-x-8 bg-red-500 px-4 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-md sm:px-10">
                        <h1 className="text-3xl text-white">
                            { title || 'Policy Violation' }
                        </h1>
                    </div>
                    <div className="mx-auto max-w-md px-6 z-10">
                        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                            <p>
                                {
                                    reason || 'This is the first line of the message where we tell them why is this page blocked.'
                                }
                            </p>

                            <p>
                                {
                                    resolution || 'This is the second line where we give them a way to resolve like contacting the admin.'
                                }
                            </p>
                            <p className=" text-transparent">{"_".repeat(32)}</p>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}
