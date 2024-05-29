import { useAuthStore } from '@/store/auth.store';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const { isAuthorized } = useAuthStore();
  if (!isAuthorized) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return <>{children}</>;
}
