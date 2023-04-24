import logo from '../../../assets/logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom'

function getNavLinkClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? 'header__nav-link header__nav-link_active'
    : 'header__nav-link'
}

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav className="header__nav">
        <ul className="header__nav-links">
          <li className="header__nav-links-item">
            <NavLink to="/movies" className={getNavLinkClass}>
              Фильмы
            </NavLink>
          </li>
          <li className="header__nav-links-item">
            <NavLink to="/saved-movies" className={getNavLinkClass}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink className={getNavLinkClass} to="/profile">
        Аккаунт <span className="header__profile-icon"></span>
      </NavLink>
    </header>
  )
}

export default Header
