import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <Link
      to="/"
      className="navbar-brand"
    >
      Go to Home page
    </Link>
  );
}
