import { useEffect } from "react";
import { useState } from "react";

const LandingHome = () => {
  const [color, setColor] = useState("bg-red-500");
  
  useEffect(() => {
    setTimeout(() => {
      setColor("bg-green-500");
    }, 5000);
  }, []);

  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="h-72 w-72 bg-blue-500 grid place-content-center ">
        <div className={`h-40 w-40 ${color} rounded-full`}></div>
      </div>
    </div>
  );
};

export default LandingHome;
