import MovieCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

function MoviesCardList() {
  function onClickHanler() {
    console.log('lol')
  }

  return (
    <section className="movies-list">
      <ul className="movies-list__list">
        <MovieCard
          actionButton={<button onClick={onClickHanler}>lol</button>}
        />
        <MovieCard
          actionButton={<button onClick={onClickHanler}>lol</button>}
        />
        <MovieCard
          actionButton={<button onClick={onClickHanler}>lol</button>}
        />
        <MovieCard
          actionButton={<button onClick={onClickHanler}>lol</button>}
        />{' '}
        <MovieCard
          actionButton={<button onClick={onClickHanler}>lol</button>}
        />
        <MovieCard
          actionButton={<button onClick={onClickHanler}>lol</button>}
        />{' '}
        <MovieCard
          actionButton={<button onClick={onClickHanler}>lol</button>}
        />
        <MovieCard
          actionButton={<button onClick={onClickHanler}>lol</button>}
        />
      </ul>
    </section>
  )
}

export default MoviesCardList
