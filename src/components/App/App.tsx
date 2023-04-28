import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'
import NotFound from '../NotFound/NotFound'

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/saved-movies" element={<SavedMovies />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
