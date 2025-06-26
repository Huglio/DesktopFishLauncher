import { useContext } from 'react';
import SessionContext from '../../contexts/SessionContext';

export function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
