import Dropdown from "../Dropdown";
import StyledTable from "./TableStyle";

function Table({
  headers = [],
  data = [],
  actions = [],
}) {
  // TODO: Move Headers and Body to different component
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
    let value = item[header.key];
    if (header.type === "date") {
      value = new Date(value);
      value = `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`;
    } else if (header.type === "image") {
      value = <img alt="logo" src={item[header.key]} />;
    }

    return <td key={`${header.key}-${item.id}`}>{value}</td>;
  };

  const ActionsDropdown = ({ item }, index) => {
    return <Dropdown
      key={`action-${index}`}
      className="table-actions"
      options={actions.map(action => {
        return {
          ...action,
          onClick: () => action.onClick(item),
        }
      })}
      showArrow={false}>
        <span>&#8942;</span>
      </Dropdown>;
  };

  const renderData = () => {
    return <tbody>
      {data.map((item, index) => {
        const jsxData = headers.map((header) => (
          parseRowData(header, item)
        ));
        jsxData.push(<td key={`actions-${item.id}`} data-testid={`btn-actions`} className="actions-column">
          {<ActionsDropdown item={item}/>}
        </td>)

        return <tr key={`row-${index}`}>{jsxData}</tr>;
      })}
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
