import './Movies.css'
import Footer from '../Common/Footer/Footer'
import Header from '../Common/Header/Header'
import MoviesCardList from '../MoviesList/MoviesCardList/MoviesCardList'
import SearchForm from '../Common/SearchForm/SearchForm'
import { useState } from 'react'

const moviesInitialState: { id: number; isLiked: boolean }[] = [
  { id: 1, isLiked: false },
  { id: 2, isLiked: false },
  { id: 3, isLiked: false },
  { id: 4, isLiked: false },
  { id: 5, isLiked: false },
  { id: 6, isLiked: false },
  { id: 7, isLiked: false },
  { id: 8, isLiked: false },
  { id: 9, isLiked: false },
  { id: 10, isLiked: false },
  { id: 11, isLiked: false },
  { id: 12, isLiked: false },
  { id: 13, isLiked: false },
  { id: 14, isLiked: false },
  { id: 15, isLiked: false },
  { id: 16, isLiked: false },
]

export default function Movies() {
  const [movies, setMovies] = useState<{ id: number; isLiked: boolean }[]>(
    () => moviesInitialState,
  )

  function onClickCardActionBtnHandler(id: number) {
    setMovies((prev) =>
      prev.map((movie) => {
        if (movie.id !== id) {
          return movie
        } else {
          return { id, isLiked: !movie.isLiked }
        }
      }),
    )
  }

  return (
    <div className="movies-page container">
      <Header />
      <SearchForm />
      <MoviesCardList
        movies={movies}
        onClickCardActionBtnHandler={onClickCardActionBtnHandler}
        cardType="save"
      />
      <button className="movies-page__load-more-btn">Ещё</button>
      <Footer />
    </div>
  )
}
