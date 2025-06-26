import { useEffect, useState } from 'react';
import { useSession } from '../hooks/useSession';
// import { getUser } from '../services/fish-api-v1/user';
import { toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import LoadingFish from '../components/molecules/LoadingFish';

export default function SaleRoutes() {
  const { token, setToken } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        // const { data } = await getUser();
        // if (data.token) {
        //   setToken(data.token);
        // }
        setToken('token');
      } catch {
        toast.error('Unexpected Error', {
          toastId: 'user-fetch-error',
        });
        setToken(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <LoadingFish loadingText="Carregando" />;
  }

  return token ? (
    <Outlet />
  ) : (
    <div>
      Um erro inesperado aconteceu, contate o suporte em: contact@eusolyy.com
    </div>
  );
}
