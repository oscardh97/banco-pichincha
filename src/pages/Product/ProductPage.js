import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form";
import productSlice from "../../store/product/product";
import { createProduct } from "../../store/product/actions/new";
import { updateProduct } from "../../store/product/actions/update";
import { isValidId } from "../../api/products/isValidId";

const ProductPage = ({ props }) => {
  const { selectedProduct, isEditing, formValidations, createProductStatus } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [isFormValid, setIsFormValid] = useState(isEditing);

  const validateStatus = () => {
    const inputValidationStatus = Object.values(formValidations);
    for (let inputName in inputValidationStatus) {
      if (inputValidationStatus[inputName] === false) {
        setIsFormValid(false);
        return;
      }
    }
    setIsFormValid(true);
  };

  useEffect(() => {
    if (isEditing) {
      dispatch(productSlice.actions.setFormValid());
    }
  }, [isEditing, dispatch]);

  useEffect(() => {
    validateStatus();
  }, [formValidations]);

  // Product Form Fields
  const FIELDS = [{
    id: "id",
    label: "ID",
    errorMessage: "ID no válido!",
    disabled: isEditing,
    min: 3,
    max: 10,
    validate: async (event) => {
      if (isEditing) {
        return true;
      }

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
      valueDate.setDate(valueDate.getDate() + 1); //TODO: Move all date logic to an util date file
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
    disabled: !isFormValid || createProductStatus.loading,
    onClick: () => {
      if (isEditing) {
        dispatch(updateProduct(selectedProduct));
      } else {
        dispatch(createProduct(selectedProduct));
      }
    },
  }];

  // TODO: Search by ID
  // const { id } = useParams();
  // useEffect(() => {
  //   if (id) {
  //     console.log("Fetch data for ", id)
  //   }
  //   validateStatus();
  // }, [id]);

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
