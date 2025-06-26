import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '../hooks/useSession';

export default function ProtectedRoutes() {
  const { token } = useSession();
  const redirectRoute = '/introduction';

  return token ? <Outlet /> : <Navigate to={redirectRoute} />;
}
