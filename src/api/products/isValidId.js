import axios from 'axios';

import { API_VALUES } from '../../utils/constants';
 
const {
  AUTHOR_ID,
  BASE_URL,
  PRODUCTS_URL,
} = API_VALUES;

export const isValidId = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${PRODUCTS_URL}/verification`, {
      params: {
        id,
      },
      headers: {
        authorId: AUTHOR_ID,
      },
      withCredentials: false
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
