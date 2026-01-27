//Components
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

//Utils
import { requestConfig } from "../utils/config";

//Components
import MovieCard from "../components/MovieCard";

//Css
import "./MoviesGrid.css";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const searchAllMovie = async () => {
    setIsLoading(true);
    setError(null);

    const config = requestConfig("GET", null, null);
    try {
      const res = await fetch(`/api/searchAllMovies`, config);
      const result = await res.json();

      if (result.errors) {
        console.log("Erros", error);
        setError(result.errors);
        return;
      }

      setTopMovies(result.results);
    } catch (error) {
      console.error("Erro ao pesquisar todos os Filmes:", error);
      setError("Erro ao pesquisar todos os Filmes. Tente novamente!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchAllMovie();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {isloading && (
          <div className="loading-container">
            <ClipLoader color="#f7d354" size={50} />
          </div>
        )}
        {!isloading && topMovies.length === 0 && (
          <p>Nenhum filme encontrado.</p>
        )}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
