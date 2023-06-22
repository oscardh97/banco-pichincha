import { fireEvent, render, screen } from "@testing-library/react";
import 'jest-styled-components'
import Table from '.';
import userEvent from "@testing-library/user-event";

describe("Table component", () => {

  test("renders empty table", () => {
    const headers = [{
      key: "name",
      label: "Nombre del producto",
    },{
      key: "description",
      label: "Descripción",
    }];
    render(<Table headers={headers} data={[]} />);
    const firstHeader = screen.getByText(headers[0].label);
    expect(firstHeader).toBeVisible();
  });

  test("renders table with data", () => {
    const headers = [{
      key: "name",
      label: "Nombre del producto",
    },{
      key: "description",
      label: "Descripción",
    }];

    const data = [{
      name: "Test ODH",
      description: "Description ODH"
    }]

    render(<Table headers={headers} data={data} />);
    const firstHeader = screen.getByText(headers[0].label);
    expect(firstHeader).toBeVisible();
    const firstRow = screen.getByText(data[0].name);
    expect(firstRow).toBeVisible();
  });

  test("renders table with actions", () => {
    let selectedItem = null;
    const headers = [{
      key: "name",
      label: "Nombre del producto",
    },{
      key: "description",
      label: "Descripción",
    }];

    const data = [{
      name: "Test ODH",
      description: "Description ODH"
    }, {
      name: "Test ODH 2",
      description: "Description ODH 2"
    }];

    const actions = [{
      text: "Editar",
      onClick: (item) => {
        selectedItem = item;
      }
    }]

    render(<Table headers={headers} data={data} actions={actions} />);
    const firstHeader = screen.getByText(headers[0].label);
    expect(firstHeader).toBeVisible();
    
    const firstRow = screen.getByText(data[0].name);
    expect(firstRow).toBeVisible();

    const actionsBtns = screen.getAllByTestId("btn-actions");
    expect(actionsBtns.length).toEqual(data.length);
    expect(actionsBtns[0]).toBeVisible();
    userEvent.click(screen.getAllByTestId("dropdown-btn")[0]);

    const editBtn = screen.getByText(actions[0].text);
    expect(editBtn).toBeVisible();
    fireEvent.click(editBtn);
    expect(selectedItem.description).toEqual(data[0].description);
  });
});
