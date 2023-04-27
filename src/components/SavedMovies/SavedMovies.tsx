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
  function onClickCardActionBtnHandler(id: number) {
    console.log('delete', id)
  }
  return (
    <div className="saved-movies-page container">
      <Header />
      <SearchForm />
      <MoviesCardList
        movies={movies}
        onClickCardActionBtnHandler={onClickCardActionBtnHandler}
        cardType="delete"
      />
      <Footer />
    </div>
  )
}
