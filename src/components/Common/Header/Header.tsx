import { useState } from 'react'
import logo from '../../../assets/logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom'

function getNavLinkClass({ isActive }: { isActive: boolean }): string {
  return isActive
    ? 'header__nav-link header__nav-link_active'
    : 'header__nav-link'
}

function getAccountLinkClass({ isActive }: { isActive: boolean }) {
  return getNavLinkClass({ isActive }) + ' header__account-link'
}

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav className="header__nav">
        <ul
          className={`header__nav-links ${
            isMenuOpened ? 'header__nav-links_opened' : ''
          }`}
        >
          <li className="header__nav-links-item header__nav-links-item_to-main">
            <NavLink to="/" className={getNavLinkClass}>
              Главная
            </NavLink>
          </li>
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
          <li className="header__nav-links-item header__nav-links-item_profile">
            <NavLink className={getAccountLinkClass} to="/profile">
              Аккаунт <span className="header__profile-icon"></span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          setIsMenuOpened((prev) => !prev)
          window.scrollTo(0, 0)
        }}
        className="header__burger"
      ></button>
    </header>
  )
}

export default Header
