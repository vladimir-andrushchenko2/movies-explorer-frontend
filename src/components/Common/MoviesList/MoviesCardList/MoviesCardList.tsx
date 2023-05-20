import './MoviesCardList.css'
import { PropsWithChildren } from 'react'

function MoviesCardList({ children }: PropsWithChildren<{}>) {
  return (
    <section className="movies-list container">
      <ul className="movies-list__list">{children}</ul>
    </section>
  )
}

export default MoviesCardList
