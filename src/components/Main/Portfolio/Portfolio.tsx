import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio container">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-item">
          <a
            className="portfolio__link"
            href="https://github.com/vladimir-andrushchenko2/how-to-learn"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__link-item">
          <a
            className="portfolio__link"
            href="https://github.com/vladimir-andrushchenko2/country-travel"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://vova.today">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
