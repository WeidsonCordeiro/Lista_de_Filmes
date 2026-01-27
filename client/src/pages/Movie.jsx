//Components
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

//Utils
import { requestConfig } from "../utils/config";

//Icons
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

//Css
import "./Movie.css";

//Components
import MovieCard from "../components/MovieCard";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const searchMovieById = async () => {
    if (!id) return;

    setIsLoading(true);
    setError(null);

    const config = requestConfig("GET", null, null);
    try {
      const res = await fetch(`/api/searchMovieById?id=${id}`, config);
      const result = await res.json();

      if (result.errors) {
        console.log("Erros", error);
        setError(result.errors);
        return;
      }

      setMovie(result);
    } catch (error) {
      console.error("Erro ao pesquisar Filme:", error);
      setError("Erro ao pesquisar Filme. Tente novamente!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchMovieById();
  }, [id]);

  const formatCurrency = (value) => {
    if (!value) return "N/A";
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="movie-page">
      {isloading && (
        <div className="loading-container">
          <ClipLoader color="#f7d354" size={50} />
        </div>
      )}
      {!isloading && movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Faturamento:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
