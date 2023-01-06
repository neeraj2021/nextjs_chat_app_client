export interface ILoginForm {
  email: string;
  password: string;
}

export interface ISignUpForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  name: string;
  email: string;
  id: number;
}
