import { useState } from "react";
import Link from 'next/link'

const Redirect = () => {
  const [val, setValue] = useState("bg-red-500");

  return (
    <div className="h-screen w-screen grid place-items-center relative">
      <div className="absolute top-2 left-2 py-2 px-6 bg-blue-500 text-white rounded-sm shadow-sm">
        <Link
            href="/automation/landing"
            className=" bg-blue-500 text-white rounded-sm shadow-sm"
        >
            CLICK ME TO REDIRECT
        </Link>
      </div>
    </div>
  );
};

export default Redirect;
