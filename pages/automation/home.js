import { useState } from "react";

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
    </div>
  );
};

export default Home;
