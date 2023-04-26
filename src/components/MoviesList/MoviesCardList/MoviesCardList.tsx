import MovieCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import CircularCheckbox from '../../UiElements/CircularCheckbox/CircularCheckbox'
import { useMemo } from 'react'

type Card = 'save' | 'delete'

type Movie = {
  id: number
  isLiked: boolean
}

type MoviesCardListProps = {
  onClickHandler: (id: number) => void
  movies: Movie[]
  cardType: Card
}

const typeToButton = {
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

function makeCards<T extends keyof typeof typeToButton>(
  cardType: T,
  movies: Movie[],
  onClickHandler: (id: number) => void,
) {
  const makeButton = typeToButton[cardType]

  return movies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        actionButton={makeButton({
          ...movie,
          onClickHandler: () => onClickHandler(movie.id),
        })}
      />
    )
  })
}

function MoviesCardList({
  onClickHandler,
  movies,
  cardType,
}: MoviesCardListProps) {
  const cards = useMemo(() => {
    return makeCards(cardType, movies, onClickHandler)
  }, [cardType, movies, onClickHandler])

  return (
    <section className="movies-list">
      <ul className="movies-list__list">{cards}</ul>
    </section>
  )
}

export default MoviesCardList
