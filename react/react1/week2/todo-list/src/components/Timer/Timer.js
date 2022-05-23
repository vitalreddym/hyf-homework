import { useEffect } from "react";
import { useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(() => {
    console.log("Timer started");
    return 0;
  });

  useEffect(() => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  });

  return <div>You have used {count} seconds on this website.</div>;
}