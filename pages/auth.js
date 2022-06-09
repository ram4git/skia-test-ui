import { useEffect } from "react"


export default function Auth() {

    useEffect(() => {
        console.log("Auth.js: useEffect()")
        // window.postMessage({ type: 'SKIA_INSPECTOR_SHOW', creds: { username: 'ram-user', password: 'ram-password' } }, '*')
        window.postMessage({ type: 'SONET_AUTH_INIT', creds: { username: 'sam-user', password: 'sam-password' } }, '*');
    }, []);


    return (
        <form className="shadow-lg h-48 my-24 p-8 rounded-md bg-blue-500 grid grid-flow-row max-w-lg mx-auto">
            <input className="h-8 rounded-full text-lg pl-8 text-green-500" name="email" type="text" placeholder="username" />
            <input className="h-8 rounded-full text-lg pl-8 text-green-500" name="password" type="password" placeholder="password" />
        </form>
    )
}