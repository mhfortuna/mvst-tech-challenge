import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders MVST text", () => {
  render(<App />);
  const linkElement = screen.getByText(/MVST/i);
  expect(linkElement).toBeInTheDocument();
});

test("Dark mode toggle", () => {
  render(<App />);
  // Click button
  fireEvent.click(screen.getByTestId("dark-mode-toggle"));
  const container = screen.getByTestId("layout-div");
  expect(container).toHaveClass("dark");
  fireEvent.click(screen.getByTestId("dark-mode-toggle"));
  expect(container).not.toHaveClass("dark");
});
