import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form";
import productSlice from "../../store/product/product";
import { createProduct } from "../../store/product/actions/new";

const ProductPage = ({ props }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.product);

  const FIELDS = [{
    id: "id",
    label: "ID",
  }, {
    id: "name",
    label: "Nombre",
  }, {
    id: "description",
    label: "Descripción",
  }, {
    id: "logo",
    label: "Logo",
  }, {
    id: "date_release",
    label: "Fecha Liberación",
  }, {
    id: "date_revision",
    label: "Fecha Revisión",
  }];

  const formButtons = [{
    text: "Enviar",
    onClick: () => {
      dispatch(createProduct(selectedProduct));
    },
  }, {
    text: "Reiniciar",
    onClick: () => {
      dispatch(productSlice.actions.resetSelectedProduct())
    },
  }];

  useEffect(() => {
    if (id) {
      // TODO: Search by ID
      console.log("Fetch data for ", id)
    }
  }, [id]);

  const handleOnChange = (event) => {
    dispatch(productSlice.actions.handleInputChange({
      name: event.target.name,
      value: event.target.value,
    }));
  };

  return <Layout>
    <Form
      title="Formulario de Registro"
      fields={FIELDS}
      values={selectedProduct}
      onChange={handleOnChange}
      buttons={formButtons}
    />
  </Layout>
};

export default ProductPage;
