export type User = {
  username: string;
  email: string;
  password: string;
};
export type UserLogin = {
  email: string;
  password: string;
};
export type UserCreatePayload = {
  user: User;
};
export type UserLoginPayload = {
  user: UserLogin;
};
export enum UserQueryKeys {
  Create = 'Create',
  Login = 'Login',
}
