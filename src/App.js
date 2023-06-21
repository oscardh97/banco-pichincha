import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import { useDispatch, useSelector } from "react-redux";
import Toast from "./components/Toast";
import { useEffect } from "react";
import productSlice from "./store/product/product";


function App() {
  const dispatch = useDispatch();
  const toastState = useSelector(state => state.product.toast);

  useEffect(() => {
    const showToast = () => {
      if (toastState.show) {
        setTimeout(() => dispatch(productSlice.actions.hideToast()), 2000);
      }
    };
    showToast();
  }, [toastState.show, dispatch]);

  return (
    <div className="App">
      {toastState.show && <Toast text={toastState.text} type={toastState.type} />}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/producto/:id?" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
