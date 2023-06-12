import './SavedMovies.css'
import Footer from '../Common/Footer/Footer'
import Header from '../Common/Header/Header'
import SavedMovieCard from './SavedMoviesCard/SavedMoviesCard'
import SearchForm from '../Common/SearchForm/SearchForm'
import MoviesCardList from '../Common/MoviesList/MoviesCardList/MoviesCardList'

const movies: { id: number; isLiked: boolean }[] = [
  { id: 1, isLiked: false },
  { id: 2, isLiked: true },
]

export default function SavedMovies() {
  function onClickCardActionBtnHandler(id: number) {
    console.log('delete', id)
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList>
          {movies.map((movie) => {
            return (
              <SavedMovieCard
                key={movie.id}
                onActionBtnClick={() => onClickCardActionBtnHandler(movie.id)}
              />
            )
          })}
        </MoviesCardList>
      </main>
      <Footer />
    </>
  )
}
