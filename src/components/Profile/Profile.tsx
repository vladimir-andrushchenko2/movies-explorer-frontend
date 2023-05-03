import Header from '../Common/Header/Header'
import './Profile.css'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className="profile-page container">
      <Header />
      <main className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form id="profile__form" className="profile__form">
          <label className="profile__label">
            <span className="profile__label-text">Имя</span>
            <input
              className="profile__input"
              type="text"
              placeholder={'Виталий'}
            />
          </label>
          <label className="profile__label">
            <span className="profile__label-text">E-mail</span>
            <input
              className="profile__input"
              type="email"
              placeholder={'test@test.com'}
            />
          </label>
        </form>

        <div className="profile__buttons">
          <input
            className="profile__edit-btn"
            type="submit"
            value={'Редактировать'}
            form="profile__form"
          />
          <Link className="profile__logout-wrapper" to="/">
            <button className="profile__logout">Выйти из аккаунта</button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Profile
