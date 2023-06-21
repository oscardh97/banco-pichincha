import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import Table from "../../components/Table/Table";
import StyledHomePage from "./HomePageStyle";
import { useEffect } from "react";
import { getProducts } from "../../store/product/actions/list";
import { useNavigate } from "react-router-dom";
import productSlice from "../../store/product/product";
import { deleteProduct } from "../../store/product/actions/delete";

//TODO: Mock Data just for testing...
const HEADERS = [{
  key: "logo",
  label: "Logo",
  type: "image",
},{
  key: "name",
  label: "Nombre del producto",
},{
  key: "description",
  label: "Descripción",
},{
  key: "date_release",
  type: "date",
  label: "Fecha de liberación",
},{
  key: "date_revision",
  type: "date",
  label: "Fecha de reestructuración",
}];
const today = new Date();
const DATA = [{
  id: "test",
  logo: "https://picsum.photos/200",
  name: "Test",
  description: "My Description",
  date_release: today,
  date_revision: new Date((new Date()).setFullYear(today.getFullYear() + 1)),
}]

const OPTIONS = [{
  text: "First",
  onClick: () => console.log("First"),
}, {
  text: "Second",
  onClick: () => console.log("Second"),
}];

const HomePage = () => {
  const navigate = useNavigate();
  const productState = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [productState.deleteProductStatus.success]);

  const handleOnAddClick = () => {
    dispatch(productSlice.actions.resetSelectedProduct());
    navigate("/producto")
  };

  const actions= [{
    text: "Editar",
    onClick: (item) => {
      dispatch(productSlice.actions.setSelectedProduct(item))
      navigate(`/producto/${item.id}`);
    }
  }, {
    text: "Eliminar",
    onClick: (item) => dispatch(deleteProduct(item.id)),
  }];

  return (
    <Layout>
      <StyledHomePage>
        <Input placeholder="Search..." />
        <Button className="add-btn" text="Agregar" onClick={handleOnAddClick} />
        <Table headers={HEADERS} data={productState.list} actions={actions}/>
        <span>{productState.list.length} resultados</span>
        <Dropdown className="page-selector" text="1" options={OPTIONS}/>
      </StyledHomePage>
    </Layout>
  );
};

export default HomePage;
