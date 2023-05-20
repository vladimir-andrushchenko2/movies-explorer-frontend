import './Login.css'
import Auth from '../Auth'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate('/movies')
  }
  return (
    <Auth>
      <div className="auth__container">
        <form onSubmit={onSubmitHandler} id="login-form" className="auth__form">
          <h1 className="auth__title">Рады видеть!</h1>

          <label className="auth__label">
            <span className="auth__label-text">E-mail</span>
            <input
              className="auth__input"
              type="email"
              placeholder="pochta@yandex.ru"
            />
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
            form="login-form"
            className="auth__submit"
            type="submit"
            value="Войти"
          />
          <Link className="auth__link" to="/signup">
            Ещё не зарегистрированы?{' '}
            <span className="auth__link-accent-text">Регистрация</span>
          </Link>
        </div>
      </div>
    </Auth>
  )
}

export default Login
