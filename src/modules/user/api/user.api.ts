import { Api } from '@/api/axios';
import { User, UserUpdatePayload } from '@/modules/user/api/user.types';

export const getUser = async () => Api.get<never, User>('/user');
export const updateUser = async (data: UserUpdatePayload) => Api.put<never, User>('/user', data);
