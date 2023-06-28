import { useState } from "react";
import Link from 'next/link'

const Home = () => {
  const [val, setValue] = useState("bg-red-500");

  return (
    <div className="h-screen w-screen grid place-items-center relative">
      <div>
        <input
          onChange={(e) => setValue(e.target.value)}
      autoFocus={true}
          placeholder="type here..."
          className="h-8 rounded-full shadow-sm py-2 pl-2 border-2 border-blue-200"
        ></input>
        {val ? (
          <p className="font-bold text-center text-sm text-gray-900 pt-4">{`You searched for ${val}`}</p>
        ) : null}
      </div>
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

export default Home;
