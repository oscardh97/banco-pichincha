import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_VALUES } from '../../../utils/constants';
 
const {
  AUTHOR_ID,
  BASE_URL,
  PRODUCTS_URL,
} = API_VALUES;

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/${PRODUCTS_URL}?id=${id}`, {
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
