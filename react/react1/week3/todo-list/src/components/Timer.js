import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [seconds]);
  return (
    <div>
      <p>You have used {seconds} seconds</p>
    </div>
  );
}