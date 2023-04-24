import Footer from '../Common/Footer/Footer'
import AboutMe from './AboutMe/AboutMe'
import AboutProject from './AboutProject/AboutProject'
import Portfolio from './Portfolio/Portfolio'
import Promo from './Promo/Promo'
import Techs from './Techs/Techs'

export default function Main() {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  )
}
