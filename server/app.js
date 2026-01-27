const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

const apiURL = process.env.TMDB_API;
const searchURL = process.env.TMDB_SEARCH;
const apiKey = process.env.TMDB_API_KEY;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/searchAllMovies", async (req, res) => {
  const searchQueryURL = `${apiURL}/top_rated?api_key=${apiKey}`;

  try {
    const response = await fetch(searchQueryURL);
    const result = await response.json();

    res.json(result);
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    res.status(500).json({ errors: [error.message] });
  }
});

app.get("/api/searchMovie", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res
      .status(400)
      .json({ errors: ["Nenhuma informação foi enviada para atualizar!"] });
  }

  const searchQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;

  try {
    const response = await fetch(searchQueryURL);
    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    res.status(500).json({ errors: [error.message] });
  }
});

app.get("/api/searchMovieById", async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ errors: ["Filme não encontrado!"] });
  }

  const searchQueryURL = `${apiURL}/${id}?api_key=${apiKey}`;

  try {
    const response = await fetch(searchQueryURL);
    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    res.status(500).json({ errors: [error.message] });
  }
});

//Middleware de Tratamento de Erros Global:
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ errors: [err.message] });
});

// app.listen(port, () => {
//   console.log(`🚀 Server run in http://localhost:${port}`);
// });

module.exports = app;
