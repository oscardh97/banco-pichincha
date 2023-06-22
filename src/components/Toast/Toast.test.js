import { render, screen } from "@testing-library/react";
import 'jest-styled-components'
import Toast from '.';

describe("Toast component", () => {

  test("renders success toast", () => {
    const textToTest = "Success";
    render(<Toast text={textToTest} type="success" />);
    const toast = screen.getByText(textToTest);
    expect(toast).toBeVisible();
    expect(toast).toHaveStyleRule("background-color", "#C7EA46");
  });

  test("renders error toast", () => {
    const textToTest = "Error";
    render(<Toast text={textToTest} type="error" />);
    const toast = screen.getByText(textToTest);
    expect(toast).toBeVisible();
    expect(toast).toHaveStyleRule("background-color", "#ff4d4d");
  });
});
