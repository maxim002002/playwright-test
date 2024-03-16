import classnames from "classnames";
import { Formik, Form, Field } from "formik";
import styles from "./Form.module.scss";

export const FormValidate = () => {
  const validateEmail = (value) => {
    if (!value) {
      return "Обязательно к заполнению";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return "Некорректный email адрес";
    }
  };
  const validatePassword = (value) => {
    if (!value) {
      return "Обязательно к заполнению";
    }
  };

  return (
    <div className={styles.form}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {({ errors, touched }) => (
          <Form>
            <label
              className={classnames(styles.inputTitle, {
                [styles.error]: errors.email && touched.email,
              })}
            >
              {errors.email && touched.email
                ? errors.email
                : "Электронная почта"}
              <Field
                className={styles.Field}
                name="email"
                type="mail"
                placeholder="Почта"
                validate={validateEmail}
              />
            </label>

            <label
              className={classnames(styles.inputTitle, {
                [styles.error]: errors.password && touched.password,
              })}
            >
              {errors.password && touched.password ? errors.password : "Пароль"}
              <Field
                className={styles.Field}
                name="password"
                type="mail"
                placeholder="Почта"
                validate={validatePassword}
              />
            </label>

            <button type="submit">Отправить</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
