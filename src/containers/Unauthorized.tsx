import { Link } from 'react-router-dom';

export function Unauthorized() {
  return (
    <Link
      to="/login"
      className="navbar-brand"
    >
      Go to Login page
    </Link>
  );
}
