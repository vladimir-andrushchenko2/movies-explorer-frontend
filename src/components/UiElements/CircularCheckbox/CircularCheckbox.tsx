import './CircularCheckbox.css'

function CircularCheckbox({
  isActive,
  onClickHandler,
}: {
  isActive: boolean
  onClickHandler: () => void
}) {
  return (
    <label>
      <input
        onClick={() => onClickHandler()}
        className="circular-checkbox"
        type="checkbox"
      />
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="11"
          r="8"
          fill={isActive ? '#2BE080' : 'red'}
          className="circular-checkbox__indicator"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 17C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5C10.6863 5 8 7.68629 8 11C8 14.3137 10.6863 17 14 17ZM14 19C18.4183 19 22 15.4183 22 11C22 6.58172 18.4183 3 14 3C9.58172 3 6 6.58172 6 11C6 15.4183 9.58172 19 14 19Z"
          fill="white"
        />
      </svg>
    </label>
  )
}

export default CircularCheckbox
