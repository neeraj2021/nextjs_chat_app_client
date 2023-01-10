import { ISignUpForm } from "../interface";

// eslint-disable-next-line import/prefer-default-export
export function signUpFormValidation(body: ISignUpForm): boolean {
  const { name, email, password, confirmPassword } = body;

  if (!name || !email || !password || !confirmPassword) {
    return false;
  }

  if (password !== confirmPassword) {
    return false;
  }
  return true;
}

export function getAxiosError(err: any) {
  if (err.response?.data?.message) {
    return err.response?.data?.message;
  }

  return "Something Went Wrong!!";
}
