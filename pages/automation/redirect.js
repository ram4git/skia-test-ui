
import { useState } from "react";
import {useRouter} from "next/router";

const Redirect = () => {
  const router = useRouter()

  const [val, setValue] = useState("bg-red-500");

  return (
    <div className="h-screen w-screen grid place-items-center relative">
      <div className="absolute top-0 left-0 py-1 px-1 bg-blue-500 text-white rounded-sm shadow-sm">
        <button type="button" onClick={() => router.push('/automation/landing')}>
        CLICK ME TO REDIRECT
    </button>
      </div>
    </div>
  );
};

export default Redirect;
