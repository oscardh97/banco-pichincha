import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import 'jest-styled-components'
import Input from '.';
import { act } from "react-dom/test-utils";

describe("Input component", () => {

  test("renders basic input and use a custom onChange callback", () => {
    const textToTest = "test";
    const handleInputChange = jest.fn();
    render(<Input data-testid="input-test" onChange={handleInputChange} />);
    const renderInput = screen.getByTestId("input-test");

    // Type some text
    userEvent.type(renderInput, textToTest)
    expect(renderInput).toHaveValue(textToTest);

    expect(handleInputChange).toHaveBeenCalledTimes(textToTest.length);
  });

  test("renders a disabled input", () => {
    const textToTest = "test";
    const handleInputChange = jest.fn();
    render(<Input disabled data-testid="input-test" onChange={handleInputChange} />);
    const renderInput = screen.getByTestId("input-test");

    // Type some text
    userEvent.type(renderInput, textToTest)
    expect(renderInput).toHaveValue("");

    expect(handleInputChange).toHaveBeenCalledTimes(0);
  });

  test("renders basic input and validate min length", () => {
    const textToTest = "test";
    render(<Input data-testid="input-test" min={5} />);
    const renderInput = screen.getByTestId("input-test");

    // Type an invalid text
    userEvent.type(renderInput, textToTest)
    expect(renderInput).toHaveValue(textToTest);

    expect(screen.queryByTestId("input-error-msg")).toBeVisible();
    expect(renderInput).toHaveStyleRule("border-color", "red");

    // Type valid text
    userEvent.type(renderInput, " 5")
    expect(renderInput).toHaveValue(`${textToTest} 5`);

    expect(screen.queryByTestId("input-error-msg")).toEqual(null);
  });

  test("renders basic input and validate max length", () => {
    const textToTest = "test 5";
    render(<Input data-testid="input-test" max={5} />);
    const renderInput = screen.getByTestId("input-test");

    // Type an invalid text
    userEvent.type(renderInput, textToTest)
    expect(renderInput).toHaveValue(textToTest);

    expect(screen.queryByTestId("input-error-msg")).toBeVisible();
    expect(renderInput).toHaveStyleRule("border-color", "red");

    // Type valid text
    userEvent.type(renderInput, "{backspace}")
    expect(renderInput).toHaveValue("test ");

    expect(screen.queryByTestId("input-error-msg")).toEqual(null);
  });

  test("renders an input and use a custom validate function", async () => {
    const textToTest = "test";
    const validate = async (event) => {
      const { value } = event.target;
      return value === textToTest;
    };

    render(<Input data-testid="input-test" validate={validate} />);
    const renderInput = screen.getByTestId("input-test");

    // Type some text
    await act(async () => {
      userEvent.type(renderInput, textToTest);
    })
    expect(renderInput).toHaveValue(textToTest);
    expect(screen.queryByTestId("input-error-msg")).toEqual(null);

    await act(async () => {
      userEvent.type(renderInput, " invalid");
    });
    expect(renderInput).toHaveValue(textToTest + " invalid");
    const errorMsg = screen.queryByTestId("input-error-msg");
    expect(errorMsg).toBeVisible();
    expect(renderInput).toHaveStyleRule("border-color", "red");

  });
});
