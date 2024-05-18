import { useEffect, useState } from 'react';

export const useGetRandomId = () => {
  const numbers = [1, 2, 3, 4];
  const [usedIds, setUsedIds] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    let availableNumbers = numbers.filter((n) => !usedIds.includes(n));

    if (availableNumbers.length === 0) {
      setUsedIds([]);
      availableNumbers = [...numbers];
    }

    const randomNum = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
    setRandomNumber(randomNum);
    setUsedIds((prevUsedIds) => [...prevUsedIds, randomNum]);
  };

  return { setUsedIds, randomNumber };
};
