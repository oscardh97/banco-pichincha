import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actions/list";
import { deleteProduct } from "./actions/delete";
import { createProduct } from "./actions/new";
import { updateProduct } from "./actions/update";

const initialState = {
  toast: {
    show: false,
    type: "",
    text: "",
  },
  list: [],
  listProductStatus: {
    loading: false,
    success: false,
    error: "",
  },
  createProductStatus: {
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
    id: false,
    name: false,
    logo: false,
    description: false,
    date_release: false,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    showToast: (state, payload) => {
      state.toast = {
        ...payload,
        show: true,
      };
    },
    setFormValid: (state) => {
      state.formValidations = {
        id: true,
        name: true,
        logo: true,
        description: true,
        date_release: true,
      };
    },
    hideToast: (state) => {
      state.toast.show = false;
    },
    resetSelectedProduct: (state) => {
      state.selectedProduct = initialState.selectedProduct;
      state.formValidations = initialState.formValidations;
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
    [getProducts.fulfilled]: (state, { payload }) => {
      state.listProductStatus.success = true;
      state.list = payload;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.listProductStatus.success = false;
      state.listProductStatus.error = [];
      state.toast = {
        show: true,
        text: "There was an error when trying to list the users"
      };
    },
    [deleteProduct.fulfilled]: (state, { payload }) => {
      state.deleteProductStatus.success = true;
      state.toast = {
        show: true,
        type: "success",
        text: "El producto fue eliminado correctamente",
      };
    },
    [deleteProduct.rejected]: (state, { payload }) => {
      state.deleteProductStatus.success = false;
      state.toast = {
        show: true,
        type: "error",
        text: "Hubo un error al eliminar el producto",
      };
    },
    [createProduct.pending]: (state, { payload }) => {
      state.createProductStatus.loading = true;
    },
    [createProduct.fulfilled]: (state, { payload }) => {
      state.createProductStatus.loading = false;
      state.toast = {
        show: true,
        type: "success",
        text: "El producto fue creado correctamente",
      };
      state.isEditing = true;
      state.createProductStatus.success = true;
    },
    [updateProduct.pending]: (state, { payload }) => {
      state.createProductStatus.loading = true;
    },
    [updateProduct.fulfilled]: (state, { payload }) => {
      state.createProductStatus.loading = false;
      state.toast = {
        show: true,
        type: "success",
        text: "El producto fue modificado correctamente",
      };
      state.isEditing = true;
      state.createProductStatus.success = true;
    },
    [createProduct.rejected]: (state, { payload }) => {
      state.createProductStatus.loading = false;
      state.createProductStatus.success = false;
      state.createProductStatus.error = payload;
    },
  },
});

export default productSlice;
