// - Написать unit-тест
// - Написать snapshot на jest

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

describe("Button test cases", () => {
  test("renders button with text", () => {
    render(<Button text="Click me" name="default" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("handles onClick event", () => {
    const onClickMock = jest.fn();
    render(<Button text="Click me" name="default" onClick={onClickMock} />);
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  test("applies custom className", () => {
    render(<Button text="Click me" name="default" className="custom-class" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toHaveClass("custom-class");
  });

  test("renders disabled button", () => {
    render(<Button text="Click me" name="default" disabled />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeDisabled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Button text="Click me" name="default" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
