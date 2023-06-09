import './DeleteButton.css'

function DeleteButton({ onClickHandler }: { onClickHandler: () => void }) {
  return (
    <button className="movie-card__delete-btn" onClick={onClickHandler}>
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.99951 4.94287L6.35656 7.29992L7.41722 6.23926L5.06017 3.88221L7.29943 1.64295L6.23877 0.582291L3.99951 2.82155L1.76037 0.582406L0.699707 1.64307L2.93885 3.88221L0.581918 6.23914L1.64258 7.2998L3.99951 4.94287Z"
          fill="white"
        />
      </svg>
    </button>
  )
}

export default DeleteButton
