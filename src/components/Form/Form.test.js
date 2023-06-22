import { fireEvent, render, screen } from "@testing-library/react";
import 'jest-styled-components'
import Form from '.';

describe("Form component", () => {
  const onClickFn = jest.fn();

  const fields = [{
    id: "id",
    label: "ID",
  }];

  const formButtons = [{
    text: "Reiniciar",
    secondary: true,
    onClick: onClickFn,
  }];

  test("renders form with title and fields", () => {
    const formTitle = "Form Test";
    render(<Form title={formTitle} fields={fields}/>);

    const title = screen.getByText(formTitle);
    expect(title).toBeVisible();

    const firstLabel = screen.getByText(fields[0].label);
    expect(firstLabel).toBeVisible();

    const firstInput = screen.getByTestId(`input-${fields[0].id}`);
    expect(firstInput).toBeVisible();

  });

  test("renders form with buttons", () => {
    const formTitle = "Form Test";
    render(<Form title={formTitle} fields={fields} buttons={formButtons}/>);

    const resetBtn = screen.getByText("Reiniciar");

    expect(resetBtn).toBeVisible();
    fireEvent.click(resetBtn);
    expect(onClickFn).toBeCalled();
  });
  
});
