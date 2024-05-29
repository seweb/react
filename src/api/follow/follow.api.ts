import { Api } from '@/api/axios';

export const postFollow = async (username: string) =>
  Api.post<never, never>(`/profiles/${username}/follow`);
