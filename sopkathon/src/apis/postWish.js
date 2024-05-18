import { client } from '../utils/apis/axios';

export const postWish = async (questionId) => {
  try {
    const response = client.post(
      `/api/v1/finalWishes/${questionId}`,
      {},
      {
        headers: {
          memberId: 1,
        },
      },
    );
    return response;
  } catch (error) {
    console.error();
  }
};
