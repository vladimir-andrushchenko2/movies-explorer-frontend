import './SavedMovies.css'
import Footer from '../Common/Footer/Footer'
import Header from '../Common/Header/Header'
import MoviesCardList from '../MoviesList/MoviesCardList/MoviesCardList'
import SearchForm from '../Common/SearchForm/SearchForm'

const movies: { id: number; isLiked: boolean }[] = [
  { id: 1, isLiked: false },
  { id: 2, isLiked: true },
]

export default function SavedMovies() {
  function onClickHandler(id: number) {
    console.log('delete', id)
  }
  return (
    <div className="saved-movies-page container">
      <Header />
      <SearchForm />
      <MoviesCardList
        movies={movies}
        onClickHandler={onClickHandler}
        cardType="delete"
      />
      <Footer />
    </div>
  )
}
