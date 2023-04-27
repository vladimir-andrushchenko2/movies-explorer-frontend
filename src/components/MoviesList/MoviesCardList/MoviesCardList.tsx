import MovieCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import CircularCheckbox from '../../UiElements/CircularCheckbox/CircularCheckbox'
import DeleteButton from '../../UiElements/DeleteButton/DeleteButton'

type CardType = 'save' | 'delete'

type Movie = {
  id: number
  isLiked: boolean
}

type MoviesCardListProps = {
  onClickCardActionBtnHandler: (id: number) => void
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
  }) => <CircularCheckbox isActive={isLiked} onClickHandler={onClickHandler} />,
  delete: ({ onClickHandler }: { onClickHandler: () => void }) => (
    <DeleteButton onClickHandler={onClickHandler} />
  ),
}

function MoviesCardList({
  onClickCardActionBtnHandler,
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
                onClickHandler: () => onClickCardActionBtnHandler(movie.id),
              })}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default MoviesCardList
