import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import StyledHomePage from "./HomePageStyle";
import { useEffect } from "react";
import { getProducts } from "../../store/product/actions/list";
import { useNavigate } from "react-router-dom";
import productSlice from "../../store/product/product";
import { deleteProduct } from "../../store/product/actions/delete";

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

const HomePage = () => {
  const navigate = useNavigate();
  const productState = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [productState.deleteProductStatus.success, dispatch]);

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
    onClick: (item) => {
      dispatch(deleteProduct(item.id))
    },
  }];

  const handleSearch = (event) => dispatch(productSlice.actions.filterProducts(event.target.value));

  return (
    <Layout>
      <StyledHomePage>
        <Input placeholder="Search..." onChange={handleSearch}/>
        <Button className="btn-add" text="Agregar" onClick={handleOnAddClick} data-testid="add-btn" />
        <Table headers={HEADERS} data={productState.filteredList} actions={actions}/>
        <span>{productState.filteredList.length} resultados</span>
        {/* TODO: Pagination Dropdown */}
        {/* <Dropdown className="page-selector" text="1" options={OPTIONS}/> */}
      </StyledHomePage>
    </Layout>
  );
};

export default HomePage;
