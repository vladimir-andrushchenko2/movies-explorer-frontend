import placeholderImg from '../../../assets/images/placeholder-movie-card.png'
import DeleteButton from '../../UiElements/DeleteButton/DeleteButton'
import './SavedMoviesCard.css'

function SavedMovieCard({
  onActionBtnClick,
}: {
  onActionBtnClick: () => void
}) {
  return (
    <li className="movie-card">
      <img className="movie-card__img" src={placeholderImg} alt="thumbnail" />
      <div className="movie-card__info movie-card__info_saved">
        <div className="movie-card__row">
          <h3 className="movie-card__title">33 слова о дизайне</h3>
          <div className="movie-card__action-btn-wrapper">
            <DeleteButton onClickHandler={onActionBtnClick} />
          </div>
        </div>
        <p className="movie-card__length movie-card__length_saved">1ч42м</p>
      </div>
    </li>
  )
}

export default SavedMovieCard
