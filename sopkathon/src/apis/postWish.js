import { client } from '../utils/apis/axios';

export const postWish = async (questionId, memberId) => {
  try {
    const response = client.post(`/api/v1/finalWishes/${questionId}`, {
      memberId: memberId,
    });
    return response;
  } catch (error) {
    console.error();
  }
};
