import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './Promo.css'

function Promo() {
  return (
    <div className="promo">
      <div className="container">
        <header className="promo__header">
          <img src={logo} alt="logo" />
          <div className="promo__links">
            <Link className="promo__link" to="/signup">
              Регистрация
            </Link>
            <Link className="promo__link promo__link_accent" to="/signin">
              Войти
            </Link>
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
      </div>
    </div>
  )
}

export default Promo
