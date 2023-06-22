import { render, screen, fireEvent } from "@testing-library/react";
import 'jest-styled-components'
import Dropdown from '.';

describe("Dropdown component", () => {
  let testVarClickOption = null;
  const actions= [{
    text: "Edit",
    onClick: () => testVarClickOption = "Clicked on Edit button",
  }, {
    text: "Delete",
    onClick: () => testVarClickOption = "Clicked on Delete button",
  }];

  beforeEach(() => {
    testVarClickOption = null;
  });

  test("renders basic dropdown", () => {
    render(<Dropdown showArrow={false} text="Click me!" data-testid="dw-test" options={actions}/>);
    const button = screen.getByText("Click me!");
    fireEvent.click(button);

    const editButton = screen.getByText("Edit");

    expect(editButton).not.toBe(null);
    expect(editButton).toBeVisible();

    fireEvent.click(editButton);

    expect(testVarClickOption).toEqual("Clicked on Edit button");

    // Dropdown label should be changed to selected option button
    expect(button.innerHTML).toEqual(actions[0].text);
    // Since list should close, the options shouldn't be visible
    const deleteButton = screen.queryByText("Delete");
    expect(deleteButton).toBe(null);
  });

  test("dropdown arrow direction", () => {
    render(<Dropdown text="Click me!" data-testid="dw-test" options={actions}/>);
    const button = screen.getByText("Click me!");

    expect(screen.queryByTestId("dropdown-arrow-down")).toBeVisible();
    expect(screen.queryByTestId("dropdown-arrow-up")).toEqual(null);

    fireEvent.click(button);

    expect(screen.queryByTestId("dropdown-arrow-up")).toBeVisible();
    expect(screen.queryByTestId("dropdown-arrow-down")).toEqual(null);
  })
});
