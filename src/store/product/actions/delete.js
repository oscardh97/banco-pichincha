import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
 
// TODO: Move this to an env var
const BASE_URL = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros";
const PRODUCTS_URL = "bp/products";
const AUTHOR_ID = process.env.REACT_APP_AUTH_ID;

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
    return error.message;
  }
});
