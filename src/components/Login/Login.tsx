import { Formik } from "formik";
import { validateLoginSchema } from "../../schemas/validateLoginSchema";
import LoginFormikForm from "../LoginFormikForm/LoginFormikForm";
import { UserLogin } from "../../interfaces/interfaces";

import useUser from "../../hooks/useUser/useUser";

const initialValues: UserLogin = { userName: "John Doe", password: "12345678" };

const Login = (): JSX.Element => {
  const { loginUser } = useUser();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateLoginSchema}
      onSubmit={(values, { resetForm }) => {
        (async () => {
          if (await loginUser(values)) {
            resetForm();
          }
        })();
      }}
    >
      <LoginFormikForm />
    </Formik>
  );
};

export default Login;
