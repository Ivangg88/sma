import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFormik from "../../Utils/test-utils";
import CustomInputField from "./CustomInputField";

describe("Given a CustomInputField", () => {
  describe("When it's instantiated with all props", () => {
    test("Then if the user write test it should have test as value", async () => {
      const labelText = "Username";
      const userWrite = "test";

      renderWithFormik(
        <CustomInputField
          class="test"
          label={labelText}
          name="username"
          placeholder="username"
          type="text"
        />,
        { username: "" }
      );

      const input = screen.getByLabelText(labelText);
      await userEvent.type(input, userWrite);

      expect(input).toBeInTheDocument();
      expect(input).toHaveValue(userWrite);
    });

    test("Then it should show the name required error if it passes with no content", async () => {
      renderWithFormik(
        <CustomInputField
          class="test"
          label="Username"
          name="username"
          placeholder="username"
          type="text"
        />,
        { username: "" }
      );
      const input = screen.getByLabelText("Username");

      await userEvent.type(input, "");

      fireEvent.blur(input);

      const error = await screen.findByTestId("errorMessage");
      expect(error).toHaveTextContent("Name is required");
    });

    test("Then it should show the name min length error if it passes with no content", async () => {
      renderWithFormik(
        <CustomInputField
          class="test"
          label="Username"
          name="username"
          placeholder="username"
          type="text"
        />,
        { username: "" }
      );

      const input = screen.getByLabelText("Username");
      await userEvent.type(input, "asd");
      fireEvent.blur(input);
      const error = await screen.findByTestId("errorMessage");

      expect(error).toHaveTextContent("Min length is 5 characters");
    });

    test("Then it should show the name max length error if it passes with no content", async () => {
      renderWithFormik(
        <CustomInputField
          class="test"
          label="Username"
          name="username"
          placeholder="username"
          type="text"
        />,
        { username: "" }
      );

      const input = screen.getByLabelText("Username");
      await userEvent.type(input, "Testtestestestestest");
      fireEvent.blur(input);
      const error = await screen.findByTestId("errorMessage");

      expect(error).toHaveTextContent("Max length is 12 characters");
    });
  });
});
