import './Login.css'
import Auth from '../Auth'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Auth>
      <div className="auth">
        <form id="register-form" className="auth__form">
          <h1 className="auth__title">Рады видеть!</h1>

          <label className="auth__label">
            <span className="auth__label-text">E-mail</span>
            <input
              className="auth__input"
              type="email"
              placeholder="cinema-fan@gmail.com"
            />
            <span className="auth__label-error-text">
              Что-то пошло не так...
            </span>
          </label>
          <label className="auth__label">
            <span className="auth__label-text">Пароль</span>
            <input
              className="auth__input"
              type="password"
              placeholder="***************"
            />
            <span className="auth__label-error-text">
              Что-то пошло не так...
            </span>
          </label>
        </form>
        <div className="auth__buttons">
          <input
            form="register-form"
            className="auth__submit"
            type="submit"
            value="Войти"
          />
          <Link className="auth__link" to="/signin">
            Ещё не зарегистрированы?{' '}
            <span className="auth__link-accent-text">Регистрация</span>
          </Link>
        </div>
      </div>
    </Auth>
  )
}

export default Login
