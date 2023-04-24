function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about_project__info-list">
        <li className="about_project__info-item">
          <h3 className="about-project__into-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__into">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about_project__info-item">
          <h3 className="about-project__into-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__into">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__chart">
        <li className="about-project__stage-item">
          <p className="about-project-stage-duration">1 неделя</p>
          <p className="about-project-stage-description">Back-end</p>
        </li>
        <li className="about-project__stage-item">
          <p className="about-project-stage-duration">4 недели</p>
          <p className="about-project-stage-description">Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject
