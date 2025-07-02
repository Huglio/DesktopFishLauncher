export type SessionContextType = {
  token: string | null;
  setToken: (newToken: string | null) => Promise<void>;
  sessionLoading: boolean;
};
