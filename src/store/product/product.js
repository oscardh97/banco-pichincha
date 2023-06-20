import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actions/list";

const initialState = {
  list: [],
  listUsersStatus: {
    loading: false,
    success: false,
    error: "",
  },
  selectedProduct: {
    id: "",
    name: "",
    logo: "",
    description: "",
    date_release: "",
    date_revision: "",
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetSelectedProduct: (state) => {
      state.selectedProduct = initialState.selectedProduct;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    handleInputChange: (state, action) => {
      state.selectedProduct[action.payload.name] = action.payload.value;
    }
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.list = payload;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.errorMessage = payload
    }
  },
});

export default productSlice;
