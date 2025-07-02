export type Invite = {
  id: number;
  code: string;
  owner_user_id: number;
  value: number;
  commission_value: number;
  use_limit: number;
  use_count: number;
  active: boolean;
  created_at: Date;
  updated_at: Date;
};
