//Hooks
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners";
import useRequest from "../hooks/useRequest";

//Icons
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'

//Css
import './Movie.css'

//Components
import MovieCard from "../components/MovieCard"


//URL's
const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const movieUrl = `${import.meta.env.VITE_API}/${id}?api_key=${import.meta.env.VITE_API_KEY}`;
  const { data, loading, error } = useRequest(movieUrl);

  useEffect(() => {
    if (data) {
      setMovie(data);
    }
  }, [data]);


  const formatCurrency = (value) => {
    if (!value) return 'N/A';
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };


  return (
    <div className="movie-page">
      {loading && (
              <div className="loading-container">
                  <ClipLoader color="#f7d354" size={50} />
              </div>
          )}
      {!loading && movie && (
      <>
        <MovieCard movie={movie} showLink={false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3><BsWallet2 /> Orçamento:</h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className="info">
          <h3><BsGraphUp /> Faturamento:</h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info">
          <h3><BsHourglassSplit /> Duração:</h3>
          <p>{movie.runtime} minutos</p>
        </div>
        <div className="info description">
          <h3><BsFillFileEarmarkTextFill /> Descrição:</h3>
          <p>{movie.overview}</p>
        </div>
      </>
      )}
    </div>
  )
}

export default Movie