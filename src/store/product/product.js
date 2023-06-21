import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actions/list";
import { deleteProduct } from "./actions/delete";

const initialState = {
  list: [],
  listProductStatus: {
    loading: false,
    success: false,
    error: "",
  },
  deleteProductStatus: {
    loading: false,
    success: false,
    error: "",
  },
  isEditing: false,
  selectedProduct: {
    id: "",
    name: "",
    logo: "",
    description: "",
    date_release: "",
    date_revision: "",
  },
  formValidations: {
    id: null,
    name: null,
    logo: null,
    description: null,
    date_release: null,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetSelectedProduct: (state) => {
      state.selectedProduct = initialState.selectedProduct;
      state.isEditing = false;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
      state.isEditing = true;
    },
    handleInputChange: (state, action) => {
      state.selectedProduct[action.payload.name] = action.payload.value;
    },
    handleInputValidation: (state, action) => {
      state.formValidations[action.payload.name] = action.payload.isValidValue;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.listProductStatus.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.listProductStatus.loading = false;
      state.listProductStatus.success = true;
      state.list = payload;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.listProductStatus.loading = false;
      state.listProductStatus.success = false;
      state.listProductStatus.error = payload
    },
    [deleteProduct.pending]: (state) => {
      state.deleteProductStatus.loading = true;
    },
    [deleteProduct.fulfilled]: (state, { payload }) => {
      state.deleteProductStatus.loading = false;
      state.deleteProductStatus.success = true;
    },
    [deleteProduct.rejected]: (state, { payload }) => {
      state.deleteProductStatus.loading = false;
      state.deleteProductStatus.success = false;
      state.deleteProductStatus.error = payload;
    },
  },
});

export default productSlice;
