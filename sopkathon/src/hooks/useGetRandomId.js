import { useState } from 'react';

export const useGetRandomId = (cards) => {
  const [usedIds, setUsedIds] = useState([]);

  const unusedCards = cards.data.filter((card) => !usedIds.includes(card.id));
  if (unusedCards.length === 0) return null;
  const randomCard = unusedCards[Math.floor(Math.random() * unusedCards.length)];
  const cardId = randomCard.id;
  return {
    usedIds,
    cardId,
    setUsedIds,
  };
};
