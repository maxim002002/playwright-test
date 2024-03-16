import { IAuthRequest } from "./interfaces";

const adminCredentials: IAuthRequest = {
  email: "admin@gmail.com",
  password: "12345",
};

export const mockRequest = async ({
  email,
  password,
}: IAuthRequest): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    email === adminCredentials.email && password === adminCredentials.password
  );
};
