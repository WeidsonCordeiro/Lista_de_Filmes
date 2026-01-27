//Components
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import MovieCard from "../components/MovieCard";

//Utils
import { requestConfig } from "../utils/config";

//Css
import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const searchMovie = async () => {
    if (!query) return;

    setIsLoading(true);
    setError(null);

    const config = requestConfig("GET", null, null);
    try {
      const res = await fetch(`/api/searchMovie?query=${query}`, config);
      const result = await res.json();

      if (result.errors) {
        console.log("Erros", error);
        setError(result.errors);
        return;
      }

      setMovies(result.results);
    } catch (error) {
      console.error("Erro ao pesquisar Filmes:", error);
      setError("Erro ao pesquisar Filmes. Tente novamente!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchMovie();
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {isloading && (
          <div className="loading-container">
            <ClipLoader color="#f7d354" size={50} />
          </div>
        )}
        {!isloading && movies.length === 0 && <p>Nenhum filme encontrado.</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
