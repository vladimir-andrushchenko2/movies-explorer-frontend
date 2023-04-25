import { useState } from 'react'
import RadioToggle from '../../UiElements/RadioToggle/RadioToggle'
import SearchIcon from '../../UiElements/SearchIcon/SearchIcon'
import './SearchForm.css'

function SearchForm() {
  const [isSearchForShortFilmsOnly, setIsSearchForShortFilmsOnly] =
    useState(false)
  function handleClick() {
    setIsSearchForShortFilmsOnly((prev) => !prev)
  }
  return (
    <div className="search">
      <SearchIcon />
      <input className="search__input" type="text" placeholder="Фильмы" />
      <button className="search__btn">Найти</button>
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
