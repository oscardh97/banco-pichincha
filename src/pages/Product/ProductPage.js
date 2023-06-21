import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form";
import productSlice from "../../store/product/product";
import { createProduct } from "../../store/product/actions/new";
import { updateProduct } from "../../store/product/actions/update";
import { isValidId } from "../../api/products/isValidId";

const ProductPage = ({ props }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, isEditing, formValidations } = useSelector((state) => state.product);

  useEffect(() => {
    const inputValidationStatus = Object.values(formValidations)
    for (let inputName in inputValidationStatus) {
      if (!inputValidationStatus[inputName]) {
        setIsFormValid(false);
        return;
      }
    }
    setIsFormValid(true);
  }, [formValidations]);

  const FIELDS = [{
    id: "id",
    label: "ID",
    errorMessage: "ID no válido!",
    disabled: isEditing,
    min: 3,
    max: 10,
    validate: async (event) => {
      const { value } = event.target;
      const isAValidId = await isValidId(value);
      return !isAValidId;
    }
  }, {
    id: "name",
    label: "Nombre",
    errorMessage: "Nombre no válido!",
    min: 5,
    max: 100,
  }, {
    id: "description",
    label: "Descripción",
    errorMessage: "Descripción no válida!",
    min: 10,
    max: 200,
  }, {
    id: "logo",
    label: "Logo",
    errorMessage: "Logo no válido!",
    min: 1,
  }, {
    id: "date_release",
    label: "Fecha Liberación",
    errorMessage: "Fecha Liberación no válida!",
    type: "date",
    onChange: (event) => {
      const { value } = event.target;
      const date = new Date(value);
      date.setFullYear(date.getFullYear() + 1);
      dispatch(productSlice.actions.handleInputChange({
        name: "date_revision",
        value: date.toISOString().split("T")[0],
      }));
    },
    validate: (event) => {
      const { value } = event.target;
      const valueDate = new Date(value);
      valueDate.setDate(valueDate.getDate() + 1); //TODO: Temporal fix to compare data
      const today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setMilliseconds(0);
      return valueDate >= today;
    }
  }, {
    id: "date_revision",
    label: "Fecha Revisión",
    type: "date",
    disabled: true,
  }];

  const formButtons = [{
    text: "Reiniciar",
    secondary: true,
    onClick: () => {
      dispatch(productSlice.actions.resetSelectedProduct())
    },
  }, {
    text: "Enviar",
    disabled: !isFormValid,
    onClick: () => {
      if (isEditing) {
        dispatch(updateProduct(selectedProduct));
      } else {
        dispatch(createProduct(selectedProduct));
      }
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

  const handleInputValidation = (validObj) => {
    dispatch(productSlice.actions.handleInputValidation(validObj));
  };

  return <Layout>
    <Form
      title="Formulario de Registro"
      fields={FIELDS}
      values={selectedProduct}
      onChange={handleOnChange}
      onValidate={handleInputValidation}
      buttons={formButtons}
    />
  </Layout>
};

export default ProductPage;
