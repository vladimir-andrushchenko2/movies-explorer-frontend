import './Footer.css'

function Footer() {
  return (
    <footer className="footer container">
      <p className="footer__copyright">
        Учебный проект Яндекс.Практикум x BeatFilm.
      </p>
      <div className="footer__row">
        <div className="footer__timestamp">&copy; 2023</div>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a className="footer__link" href="https://practicum.yandex.ru/">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__links-item">
            <a
              className="footer__link"
              href="https://github.com/vladimir-andrushchenko2"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
