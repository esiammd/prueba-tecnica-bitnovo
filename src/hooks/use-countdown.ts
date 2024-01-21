import { useCallback, useEffect, useState } from 'react';

const useCountdown = (expirationDate: Date) => {
  const getRemainingTime = useCallback(() => {
    const result = expirationDate.valueOf() - new Date().valueOf();

    if (result > 0) {
      return result;
    }
    return 0;
  }, [expirationDate]);

  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  const minutesValue = Math.floor(remainingTime / 60000).toString();
  const secondsValue = ((remainingTime % 60000) / 1000)
    .toFixed(0)
    .padStart(2, '0');

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime());
      if (getRemainingTime() === 0) {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [getRemainingTime]);

  return remainingTime > 0 ? `${minutesValue}:${secondsValue}` : 'Time expired';
};

export default useCountdown;
