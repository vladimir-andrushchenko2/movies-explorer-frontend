import './Movies.css'
import Footer from '../Common/Footer/Footer'
import Header from '../Common/Header/Header'
import MoviesCardList from '../MoviesList/MoviesCardList/MoviesCardList'
import SearchForm from '../Common/SearchForm/SearchForm'

export default function Movies() {
  return (
    <div className="movies-page container">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <button className="movies-page__load-more-btn">Ещё</button>
      <Footer />
    </div>
  )
}
