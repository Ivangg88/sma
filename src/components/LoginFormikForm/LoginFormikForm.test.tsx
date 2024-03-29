import { screen } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import LoginFormikForm from "./LoginFormikForm";

describe("Given a LoginFormikForm component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show 2 inputs and the login button", () => {
      const labelUser = "Username";
      const labelPassword = "Password";
      const buttonText = "Login";

      renderWithFormik(<LoginFormikForm />);

      const inputUser = screen.getByLabelText(labelUser);
      const inputPassword = screen.getByLabelText(labelPassword);
      const button = screen.getByRole("button");

      expect(inputUser).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(button).toHaveTextContent(buttonText);
    });
  });
});
