import './RadioToggle.css'

function RadioToggle({ isActive }: { isActive: boolean }) {
  return (
    <svg
      width="36"
      height="20"
      viewBox="0 0 36 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`toggle ${isActive ? 'toggle_active' : 'toggle_disabled'}`}
    >
      <rect x="1" y="3" width="34" height="14" rx="7" fill="#2BE080" />
      <circle cx="28" cy="10" r="5" fill="white" />
    </svg>
  )
}

export default RadioToggle
