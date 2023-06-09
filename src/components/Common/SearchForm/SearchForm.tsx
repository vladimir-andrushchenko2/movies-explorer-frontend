import { useState } from 'react'
import RadioToggle from '../../UiElements/SliderToggle/RadioToggle'
import SearchIcon from '../../UiElements/SearchIcon/SearchIcon'
import './SearchForm.css'

function SearchForm() {
  const [isSearchForShortFilmsOnly, setIsSearchForShortFilmsOnly] =
    useState(false)
  function handleClick() {
    setIsSearchForShortFilmsOnly((prev) => !prev)
  }
  return (
    <div className="search container">
      <SearchIcon />
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button className="search__btn">Найти</button>
      </form>
      <span className="search__vertical-line-divider"></span>
      <label className="search__label">
        <input
          type="checkbox"
          className="search__checkbox"
          onClick={handleClick}
        />
        <RadioToggle isActive={isSearchForShortFilmsOnly} />
        <span className="search__label-text">Короткометражки</span>
      </label>
    </div>
  )
}

export default SearchForm
