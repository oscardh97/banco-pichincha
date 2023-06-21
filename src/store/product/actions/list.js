import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_VALUES } from '../../../utils/constants';
 
const {
  AUTHOR_ID,
  BASE_URL,
  PRODUCTS_URL,
} = API_VALUES;

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${PRODUCTS_URL}`, {
      headers: {
        authorId: AUTHOR_ID,
      },
      withCredentials: false
    });
    return data;
  } catch (error) {
    throw error.message;
  }
});
