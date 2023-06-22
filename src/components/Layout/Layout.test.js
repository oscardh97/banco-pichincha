import { render, screen } from "@testing-library/react";
import 'jest-styled-components'
import Layout from '.';
import { BrowserRouter } from "react-router-dom";
import Button from "../Button";

describe("Layout component", () => {

  test("renders layout and see the logo image", () => {
    render(<BrowserRouter>
      <Layout data-testid="layout-test" />
    </BrowserRouter>);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeVisible();
  });

  test("renders layout and see the children", () => {
    render(<BrowserRouter>
      <Layout data-testid="layout-test">
        <Button text="Test" />
      </Layout>
    </BrowserRouter>);
    const logo = screen.getByText("Test");
    expect(logo).toBeVisible();
  });
});
