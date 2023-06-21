import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_VALUES } from '../../../utils/constants';
 
const {
  AUTHOR_ID,
  BASE_URL,
  PRODUCTS_URL,
} = API_VALUES;

export const createProduct = createAsyncThunk('product/createProduct', async (product) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/${PRODUCTS_URL}`,
    product,
    {
      headers: {
        authorId: AUTHOR_ID,
      },
      withCredentials: false,
    });
    return data;
  } catch (error) {
    throw error.message;
  }
});
