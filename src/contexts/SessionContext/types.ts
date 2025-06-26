export type SessionContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
};
