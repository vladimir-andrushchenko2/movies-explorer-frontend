import Footer from '../Common/Footer/Footer'
import AboutMe from './AboutMe/AboutMe'
import AboutProject from './AboutProject/AboutProject'
import Portfolio from './Portfolio/Portfolio'
import Promo from './Promo/Promo'
import Techs from './Techs/Techs'
import './Main.css'

export default function Main() {
  return (
    <div className="main-page">
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
