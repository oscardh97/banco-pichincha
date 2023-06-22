import { render, screen, fireEvent } from "@testing-library/react";
import 'jest-styled-components'
import Button from '.';

describe("Button component", () => {

  test("renders basic button", () => {
    render(<Button text="Click me!" data-testid="btn-test" />);
    const renderButton = screen.getByTestId("btn-test");
    expect(renderButton.innerHTML).toEqual("Click me!");
    expect(renderButton).toHaveStyleRule("background-color", "#FFD000");
    expect(renderButton).toHaveStyleRule("opacity", "1");
  });

  test("renders disabled button", () => {
    render(<Button disabled text="Click me!" data-testid="btn-test" />);
    const renderButton = screen.getByTestId("btn-test");
    expect(renderButton.innerHTML).toEqual("Click me!");
    expect(renderButton).toBeDisabled();
    expect(renderButton).toHaveStyleRule("background-color", "#FFD000");
    expect(renderButton).toHaveStyleRule("opacity", "0.5");
  });

  test("renders secondary button", () => {
    render(<Button secondary text="Click me!" data-testid="btn-test" />);
    const renderButton = screen.getByTestId("btn-test");
    expect(renderButton.innerHTML).toEqual("Click me!");
    expect(renderButton).toHaveStyleRule("background-color", "#d2d5dd");
    expect(renderButton).toHaveStyleRule("opacity", "1");
  });

  test("renders secondary disabled button", () => {
    render(<Button secondary disabled text="Click me!" data-testid="btn-test" />);
    const renderButton = screen.getByTestId("btn-test");
    expect(renderButton.innerHTML).toEqual("Click me!");
    expect(renderButton).toBeDisabled();
    expect(renderButton).toHaveStyleRule("background-color", "#d2d5dd");
    expect(renderButton).toHaveStyleRule("opacity", "0.5");
  });

  test("click button", () => {
    const testClickFunction = jest.fn();
    render(<Button text="Click me!" data-testid="btn-test" onClick={testClickFunction}/>);
    const renderButton = screen.getByTestId("btn-test");
    expect(renderButton.innerHTML).toEqual("Click me!");

    fireEvent.click(renderButton);

    expect(testClickFunction).toBeCalled();
  });

  test("a disabled button can't be clicked", () => {
    const testClickFunction = jest.fn();
   render(<Button disabled text="Click me!" data-testid="btn-test" onClick={testClickFunction}/>);
   const renderButton = screen.getByTestId("btn-test");
   expect(renderButton.innerHTML).toEqual("Click me!");
   expect(renderButton).toBeDisabled();
   expect(renderButton).toHaveStyleRule("opacity", "0.5");

   fireEvent.click(renderButton);

   expect(testClickFunction).not.toBeCalled();
  });
});
