import type { AxiosResponse } from 'axios';
import api from '../../axios';
import type { Invite } from './types';

export async function validateInvite(): Promise<
  AxiosResponse<Invite, unknown>
> {
  const result = await api.post<Invite>('/invites/validate');
  return result;
}
