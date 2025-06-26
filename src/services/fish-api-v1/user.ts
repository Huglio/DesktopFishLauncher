import type { AxiosResponse } from 'axios';
import api from '../axios';
import type { UserWithToken } from './types';

export async function getUser(): Promise<
  AxiosResponse<UserWithToken, unknown>
> {
  const result = await api.post<UserWithToken>('/users');
  return result;
}
