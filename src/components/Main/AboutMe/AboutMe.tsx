import avatarImg from '../../../assets/images/avatar.jpeg'
import './AboutMe.css'

function AboutMe() {
  return (
    <section className="about-me container">
      <h2 className="about-me__title main-page__section-title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__info">
          <div className="about-me__container">
            <p className="about-me__name main-page__title">Владимир</p>
            <p className="about-me__profession">Web developer, 28 years</p>
            <p className="about-me__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              optio facilis doloribus repellendus eligendi sint laudantium
              veritatis deleniti aperiam cumque cum iusto necessitatibus nam est
              ducimus autem quod quaerat voluptatum ratione. Repellendus animi
              est, quaerat facilis ipsum rerum provident culpa necessitatibus,
              dolorem officia veniam quae.
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
