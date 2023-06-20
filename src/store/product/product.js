import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
};

//TODO: Remove, it's just for testing
const today = new Date();

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state) {
      state.allProducts = [{
        id: "test",
        name: "Test",
        description: "My Description",
        date_release: today,
        date_revision: new Date((new Date()).setFullYear(today.getFullYear() + 1)),
      }];
    },
    extraReducers: {}
  },
});

export default productSlice;
