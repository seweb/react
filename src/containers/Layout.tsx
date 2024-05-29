import { Outlet, useRouteError } from 'react-router-dom';
import { Header, Footer } from '@/containers';

export function Layout() {
  const error = useRouteError();
  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <div className="content">{error ? <div>Something went wrong</div> : <Outlet />}</div>
      </div>
      <Footer />
    </div>
  );
}
