export type User = {
  user: {
    username: string;
    email: string;
    bio: string;
    image: string;
    token: string;
  };
};

export type UserUpdatePayload = {
  user: {
    username: string;
    email: string;
    bio: string;
    image: string;
  };
};

export enum UserQueryKeys {
  Get = 'Get',
  Put = 'Put',
}
