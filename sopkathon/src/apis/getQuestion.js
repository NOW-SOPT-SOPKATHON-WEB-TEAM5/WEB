import { client } from '../utils/apis/axios';

export const getQuestion = async () => {
  try {
    const response = await client.get(`/api/v1/question`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
