import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
 
// TODO: Move this to an env var
const BASE_URL = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros";
const PRODUCTS_URL = "bp/products";
const AUTHOR_ID = 321;

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
    return error.message;
  }
});
