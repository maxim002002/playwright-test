// @ts-ignore
import { FC } from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  name: "primary" | "default" | "dashed" | "text" | "link";
  type?: "submit" | "button";
  onClick?: VoidFunction;
  className?: string;
  disabled?: boolean;
  id?: string;
  dataTestId?: string;
}

export const Button: FC<IButton> = ({
  onClick,
  text,
  name,
  type,
  className,
  disabled,
  id,
  dataTestId,
}) => {
  return (
    <button
      className={classnames(styles.button, styles[name], className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
      id={id}
      data-testid={dataTestId}
    >
      {text}
    </button>
  );
};
