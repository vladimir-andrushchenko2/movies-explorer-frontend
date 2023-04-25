import MovieCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import CircularCheckbox from '../../UiElements/CircularCheckbox/CircularCheckbox'

type MoviesCardListProps = {
  onClickHandler: (id: number) => void
  movies: {
    id: number
    isLiked: boolean
  }[]
  cardType: 'save' | 'delete'
}

function MoviesCardList({
  onClickHandler,
  movies,
  cardType,
}: MoviesCardListProps) {
  return (
    <section className="movies-list">
      <ul className="movies-list__list">
        {movies.map(({ id, isLiked }) => {
          return (
            <MovieCard
              key={id}
              actionButton={
                cardType === 'save' ? (
                  <CircularCheckbox
                    isActive={isLiked}
                    onClickHandler={() => onClickHandler(id)}
                  />
                ) : (
                  <button onClick={() => onClickHandler(id)}>lol</button>
                )
              }
            />
          )
        })}
      </ul>
    </section>
  )
}

export default MoviesCardList
