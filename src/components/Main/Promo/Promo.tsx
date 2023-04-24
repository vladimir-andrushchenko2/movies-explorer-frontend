import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'

function Promo() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" />
        <div className="auth">
          <Link to="/signup">Регистрация</Link>
          <Link to="/signin">Войти</Link>
        </div>
      </header>
      <section className="hero">
        <h1 className="hero__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="hero__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="hero__learn-more-btn">Узнать больше</button>
      </section>
    </>
  )
}

export default Promo
