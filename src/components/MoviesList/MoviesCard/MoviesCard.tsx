import './MoviesCard.css'
import placeholderImg from '../../../assets/images/placeholder-movie-card.png'

type MovieCardProps = {
  actionButton: JSX.Element
}

function MovieCard({ actionButton }: MovieCardProps) {
  return (
    <li className="movie-card">
      <img className="movie-card__img" src={placeholderImg} alt="thumbnail" />
      <div className="movie-card__info">
        <div className="movie-card__row">
          <h3 className="movie-card__title">33 слова о дизайне</h3>
          {actionButton}
        </div>
        <p className="movie-card__length">1ч42м</p>
      </div>
    </li>
  )
}

export default MovieCard
