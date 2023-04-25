import './SavedMovies.css'
import Footer from '../Common/Footer/Footer'
import Header from '../Common/Header/Header'
import MoviesCardList from '../MoviesList/MoviesCardList/MoviesCardList'
import SearchForm from '../Common/SearchForm/SearchForm'

export default function SavedMovies() {
  return (
    <div className="saved-movies-page container">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  )
}
