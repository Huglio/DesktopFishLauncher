export type UserWithToken = {
  user: User;
  token: string;
};

export type User = {
  id: number;
  active: boolean;
  pix: string | null;
  email: string | null;
  payment_interval: number;
  payment_interval_count: number;
  created_at: Date;
  updated_at: Date;
};
