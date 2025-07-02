import { createContext, useEffect, useState, type ReactNode } from 'react';
import type { SessionContextType } from './types';
import { storageService } from '../../services/tauri-storage';
import { toast } from 'react-toastify';
import { ERROR_CODES } from '../../utils/error-codes';

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [token, setTokenState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const savedToken = await storageService.getToken();
        if (savedToken) {
          setTokenState(savedToken);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadToken();
  }, []);

  const setToken = async (newToken: string | null) => {
    try {
      console.log(
        'Setting token:',
        newToken ? 'token provided' : 'removing token'
      );
      if (newToken) {
        await storageService.setToken(newToken);
        console.log('token set sucessfully');
      } else {
        await storageService.removeToken();
        console.log('token removed')
      }
      setTokenState(newToken);
    } catch {
      const errorCode = newToken ? ERROR_CODES.SC_002 : ERROR_CODES.SC_003;
      toast.error(`Erro inesperado (${errorCode})`, {
        toastId: `session-error-${errorCode}`,
      });
    }
  };

  return (
    <SessionContext.Provider
      value={{ token, setToken, sessionLoading: isLoading }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContext;
