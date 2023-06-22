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
    expect(renderButton).toHaveStyleRule("background-color", "#d2d5dd");
    expect(renderButton).toHaveStyleRule("opacity", "0.5");
  });

  test("click button", () => {
    let testClickVar = null;
    render(<Button text="Click me!" data-testid="btn-test" onClick={() => testClickVar = "You clicked me!"}/>);
    const renderButton = screen.getByTestId("btn-test");
    expect(renderButton.innerText).toEqual("Click me!");

    fireEvent.click(renderButton);

    expect(testClickVar).toEqual("You clicked me!");
  });

  test("a disabled button can't be clicked", () => {
   let testClickVar = null;
   render(<Button disabled text="Click me!" data-testid="btn-test" onClick={() => testClickVar = "You clicked me!"}/>);
   const renderButton = screen.getByTestId("btn-test");
   expect(renderButton.innerHTML).toEqual("Click me!");
   expect(renderButton).toHaveStyleRule("opacity", "0.5");

   fireEvent.click(renderButton);

   expect(testClickVar).toEqual(null);
  });
});
