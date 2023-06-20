import Dropdown from "../Dropdown/Dropdown";
import StyledTable from "./TableStyle";
import { useSelector } from "react-redux";

function Table({
  headers = [],
  data = [],
}) {
  // TODO: Move Headers y Body to different component
  // TODO: Add Info icon
  const renderHeaders = () => {
    const jsxHeaders = headers.map(header => (
      <th key={header.key}>{header.label}</th>
    ));

    jsxHeaders.push(
      <th key="actions"></th>
    );

    return <thead>
      <tr>
        {jsxHeaders}
      </tr>
    </thead>
  };

  const parseRowData = (header, item) => {
    // TODO: move this to an util function
    const value = header.type === "date" ? `${item[header.key].getDate()}/${item[header.key].getMonth() + 1}/${item[header.key].getFullYear()}` :
    header.type === "image" ? <img alt="logo" src={item[header.key]} /> :
    item[header.key];
    return <td key={`${header.key}-${item.id}`}>{value}</td>;
  };

  const ActionsDropdown = ({ id }) => {
    const options= [{
      text: "Editar",
      onClick: () => console.log(`@Editing... ${id}`)
    }, {
      text: "Eliminar",
      onClick: () => console.log(`@Deleting... ${id}`)
    }];

    return <Dropdown
      className="table-actions"
      options={options}
      showArrow={false}>
        <span>&#8942;</span>
      </Dropdown>;
  };

  const renderData = () => {
    return <tbody>
      <tr>
        {data.map(item => {
          const jsxData = headers.map((header) => (
            parseRowData(header, item)
          ));
          jsxData.push(<td key={`actions-${item.id}`} className="actions-column">
            {<ActionsDropdown id={item.id}/>}
          </td>)

          return jsxData;
        })}
      </tr>
    </tbody>
  };

  return <StyledTable>
    <table>
      {renderHeaders()}
      {renderData()}
    </table>
  </StyledTable>
};

export default Table;
