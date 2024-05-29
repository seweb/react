import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChangeLanguage } from '@/containers';
import { useAuthStore } from '@/store/auth.store';
export function Header() {
  const { isAuthorized } = useAuthStore();
  const { t } = useTranslation();
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand"
        >
          conduit
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
            >
              {t('header:home')}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/login"
              className="nav-link"
            >
              {t('header:signIn')}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/register"
              className="nav-link"
            >
              {t('header:signUp')}
            </NavLink>
          </li>
          {isAuthorized && (
            <>
              <li className="nav-item">
                <NavLink
                  to="/settings"
                  className="nav-link"
                >
                  {t('header:settings')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className="nav-link"
                >
                  {t('header:profile')}
                </NavLink>
              </li>
            </>
          )}
          <li className="nav-item">
            <ChangeLanguage />
          </li>
        </ul>
      </div>
    </nav>
  );
}
