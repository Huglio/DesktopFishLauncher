import { useEffect, useRef, useState } from 'react';
import { useSession } from '../hooks/useSession';
import { toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import LoadingFish from '../components/molecules/LoadingFish';
import UnexpectedErrorPage from '../pages/Error/UnexpectedError';
import { getUser } from '../services/fish-api-v1/users';
import { ERROR_CODES } from '../utils/error-codes';

export default function SaleRoutes() {
  const { token, setToken, sessionLoading } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const hasInitialized = useRef(false);

  useEffect(() => {
    const fetchUser = async (attempt = 1, maxAttempts = 2) => {
      console.log(token);
      if (sessionLoading) return;

      if (token || hasInitialized.current) {
        setIsLoading(false);
        return;
      }

      hasInitialized.current = true;
      setIsLoading(true);

      try {
        const { data } = await getUser();
        if (data.token) {
          await setToken(data.token);
        }
      } catch (error) {
        if (attempt < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          return fetchUser(attempt + 1, maxAttempts);
        }

        toast.error(`Erro inesperado (${ERROR_CODES.SR_001})`, {
          toastId: `validate-fetch-${ERROR_CODES.SR_001}`,
        });
        await setToken(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <LoadingFish loadingText="Carregando" />;
  }

  return token ? <Outlet /> : <UnexpectedErrorPage />;
}
