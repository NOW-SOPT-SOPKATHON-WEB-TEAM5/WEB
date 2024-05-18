import { client } from '../utils/apis/axios';

export const getQuestion = async (cardId) => {
  try {
    const response = client.get(`/api/v1/question/${cardId}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
