export type ValidationResult = () => string | undefined;

export const validateEmail = (value: string) => {
  if (!value) {
    return "Обязательно к заполнению";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "Некорректный email адрес";
  }
};
export const validatePassword = (value: string) => {
  if (!value) {
    return "Обязательно к заполнению";
  }
  if (value.length < 5) {
    return "Слишком короткий пароль";
  }
};
