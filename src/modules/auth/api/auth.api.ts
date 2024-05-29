import { Api } from '@/api/axios';
import {
  User,
  UserLogin,
  UserCreatePayload,
  UserLoginPayload,
} from '@/modules/auth/api/auth.types';

export const createUser = async (data: UserCreatePayload) => Api.post<never, User>('/users', data);
export const loginUser = async (data: UserLoginPayload) =>
  Api.post<never, UserLogin>('/users/login', data);
