import { createContext, useState, type ReactNode } from 'react';
import type { SessionContextType } from './types';

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  return (
    <SessionContext.Provider value={{ token, setToken }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContext;
