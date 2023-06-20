import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import Table from "../../components/Table/Table";
import StyledHomePage from "./HomePageStyle";

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
  return (
    <Layout>
      <StyledHomePage>
        <Input placeholder="Search..." />
        <Button className="add-btn" text="Agregar" />
        <Table headers={HEADERS} data={DATA}/>
        <span>{OPTIONS.length} resultados</span>
        <Dropdown className="page-selector" text="1" options={OPTIONS}/>
      </StyledHomePage>
    </Layout>
  );
};

export default HomePage;
