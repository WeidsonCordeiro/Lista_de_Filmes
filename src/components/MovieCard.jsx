//Hooks
import { Link } from "react-router-dom"

//Icons
import { FaStar } from 'react-icons/fa'

const MovieCard = ({movie, showLink = true}) => {

  return (
    <div className="movie-card">
      <img src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p><FaStar /> {movie.vote_average}</p>
      {showLink && (
        <Link to={`/movie/${movie.id}`}>Detalhes</Link>
      )}
    </div>
  )
}

export default MovieCard