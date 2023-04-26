import MovieCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import CircularCheckbox from '../../UiElements/CircularCheckbox/CircularCheckbox'

type CardType = 'save' | 'delete'

type Movie = {
  id: number
  isLiked: boolean
}

type MoviesCardListProps = {
  onClickHandler: (id: number) => void
  movies: Movie[]
  cardType: CardType
}

const cardTypeToButtonJSXElementFactory = {
  save: ({
    isLiked,
    onClickHandler,
  }: {
    isLiked: boolean
    onClickHandler: () => void
  }) => (
    <CircularCheckbox
      isActive={isLiked}
      onClickHandler={() => onClickHandler()}
    />
  ),
  delete: ({ onClickHandler }: { onClickHandler: () => void }) => (
    <button onClick={() => onClickHandler()}>delete card</button>
  ),
}

function MoviesCardList({
  onClickHandler,
  movies,
  cardType,
}: MoviesCardListProps) {
  const makeButton = cardTypeToButtonJSXElementFactory[cardType]

  return (
    <section className="movies-list">
      <ul className="movies-list__list">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              actionButton={makeButton({
                ...movie,
                onClickHandler: () => onClickHandler(movie.id),
              })}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default MoviesCardList
