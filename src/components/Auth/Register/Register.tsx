import './Register.css'
import Auth from '../Auth'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate('/movies')
  }

  return (
    <Auth>
      <div className="auth">
        <form
          onSubmit={onSubmitHandler}
          id="register-form"
          className="auth__form"
        >
          <h1 className="auth__title">Добро пожаловать!</h1>
          <label className="auth__label">
            <span className="auth__label-text">Имя</span>
            <input className="auth__input" type="text" placeholder="Виталий" />
            <span className="auth__label-error-text">
              Что-то пошло не так...
            </span>
          </label>
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
              placeholder="Min 8 Characters, Capital letter, and a Symbol"
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
            value="Зарегистрироваться"
          />
          <Link className="auth__link" to="/signin">
            Уже зарегистрированы?{' '}
            <span className="auth__link-accent-text">Войти</span>
          </Link>
        </div>
      </div>
    </Auth>
  )
}

export default Register
