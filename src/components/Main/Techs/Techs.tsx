import './Techs.css'

function Techs() {
  return (
    <section className="techs">
      <div className="container">
        <h2 className="techs__title main-page__section-title">Технологии</h2>
        <p className="techs__subtitle main-page__title">7 технологий</p>
        <p className="techs__info">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs
