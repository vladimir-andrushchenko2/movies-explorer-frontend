import avatarImg from '../../../assets/images/avatar.jpeg'

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__info">
        <div className="about-me__container">
          <h2 className="about-me__title">Студент</h2>
          <p className="about-me__name">Владимир</p>
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
      <img width={270} src={avatarImg} alt="" className="about-me__img" />
    </section>
  )
}

export default AboutMe
