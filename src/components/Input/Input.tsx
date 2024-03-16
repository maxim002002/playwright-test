// Input.tsx
import React, { FC } from "react";
import { Field, FieldProps } from "formik";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
  name: string;
  validate?: (value: string) => string | undefined;
  formik?: boolean; // Флаг, указывающий, используется ли компонент с Formik
  dataTestId?: string;
}

export const Input: FC<IInputProps> = ({
  className,
  name,
  validate,
  formik,
  dataTestId,
  ...props
}) => {
  if (formik) {
    return (
      <Field name={name} validate={validate}>
        {({ field, meta }: FieldProps<string>) => (
          <>
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
            <input
              className={className}
              {...field}
              {...props}
              data-testid={dataTestId}
            />
          </>
        )}
      </Field>
    );
  }

  return <input className={className} name={name} {...props} />;
};
