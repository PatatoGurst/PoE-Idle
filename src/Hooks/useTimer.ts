import { useEffect, useState } from 'react';

export default function useTimer() {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 50);
    return () => clearInterval(interval);
  }, [timer]);

  return {
    timer,
  };
}
