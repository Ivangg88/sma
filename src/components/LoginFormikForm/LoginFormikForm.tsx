import { Form, useFormikContext } from "formik";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import CustomInputField from "../CustomInputField/CustomInputField";
import LoginFormikFormStyled from "./LoginFormikFormStyled";

const LoginFormikForm = (): JSX.Element => {
  const { isValid } = useFormikContext();

  return (
    <LoginFormikFormStyled>
      <Form
        noValidate
        autoComplete="off"
        className="form-container"
        data-testid="loginForm"
      >
        <CustomInputField
          class="form-container__input"
          label="Username"
          name="userName"
          placeholder="username"
          type="text"
          value={"Thomas"}
        />

        <CustomInputField
          class="form-container__input"
          label="Password"
          name="password"
          placeholder="********"
          type="password"
          value={"12345678"}
        />

        <Button type="submit" text="Login" disabled={!isValid} />
      </Form>
    </LoginFormikFormStyled>
  );
};
export default LoginFormikForm;
