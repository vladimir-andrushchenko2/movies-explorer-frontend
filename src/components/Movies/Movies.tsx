import './Movies.css'
import Footer from '../Common/Footer/Footer'
import Header from '../Common/Header/Header'
import MoviesCardList from '../MoviesList/MoviesCardList/MoviesCardList'
import SearchForm from '../Common/SearchForm/SearchForm'

const movies: { id: number; isLiked: boolean }[] = [
  { id: 1, isLiked: false },
  { id: 2, isLiked: true },
]

export default function Movies() {
  function onClickHandler(id: number) {
    console.log(id)
  }

  return (
    <div className="movies-page container">
      <Header />
      <SearchForm />
      <MoviesCardList
        movies={movies}
        onClickHandler={onClickHandler}
        cardType="save"
      />
      <button className="movies-page__load-more-btn">Ещё</button>
      <Footer />
    </div>
  )
}
