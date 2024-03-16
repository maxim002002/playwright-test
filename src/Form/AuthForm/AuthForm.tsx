// AuthForm.tsx
import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleModalState } from "../../redux/slices/ModalState";
import { toggleUserLogin } from "../../redux/slices/UserState";
import { mockRequest, type IAuthRequest } from "../../mockRequest";
import { validateEmail, validatePassword } from "../utils/validate";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import styles from "./AuthForm.module.scss";

interface FormValues {
  email: string;
  password: string;
}

interface FormField {
  name: keyof FormValues;
  type: string;
  placeholder: string;
  label: string;
  validate: (value: any) => string | undefined;
  dataTestId?: string;
}

const formFields: FormField[] = [
  {
    name: "email",
    type: "mail",
    placeholder: "Почта",
    label: "Электронная почта",
    validate: validateEmail,
    dataTestId: "inputMail-authModal",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Пароль",
    label: "Введите пароль",
    validate: validatePassword,
    dataTestId: "inputPassword-authModal",
  },
];

export const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data: IAuthRequest) => {
    const request = await mockRequest(data);
    if (request) {
      dispatch(toggleUserLogin());
      dispatch(toggleModalState());
      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.form} data-testid="auth-form">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            {formFields.map(
              ({ name, type, placeholder, label, validate, dataTestId }) => (
                <label key={name} className={styles.inputTitle}>
                  {label}
                  <Input
                    className={styles.Field}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    validate={validate}
                    dataTestId={dataTestId}
                    formik
                  />
                </label>
              ),
            )}
            <Button
              text="Отправить"
              name="primary"
              type="submit"
              disabled={isSubmitting || !isValid}
              dataTestId="buttonSubmit-authModal"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
