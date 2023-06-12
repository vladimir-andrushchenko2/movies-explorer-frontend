import avatarImg from '../../../assets/images/avatar.jpeg'
import './AboutMe.css'

function AboutMe() {
  return (
    <section className="about-me container">
      <h2 className="about-me__title main-page__section-title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__info">
          <div className="about-me__container">
            <p className="about-me__name main-page__title">Виталий</p>
            <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__description">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
              экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
              слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
              С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс по&nbsp;веб-разработке, начал
              заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
          </div>
          <a
            href="https://github.com/vladimir-andrushchenko2"
            className="about-me__github"
          >
            github
          </a>
        </div>
        <img width={270} src={avatarImg} alt="я" className="about-me__img" />
      </div>
    </section>
  )
}

export default AboutMe
