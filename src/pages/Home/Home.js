import React, { useState } from "react";
import Filter from "../../components/Filter";
import AddMovieForm from "../../components/AddMovieForm";
import Data from "../../Data";
import "../../App.css";
import MovieList from "../MovieList/MovieList";

const Home = () => {
  const [movies, setMovies] = useState(Data);
  const [filter, setFilter] = useState({ title: "", rate: "" });

  const handleFilterChange = (type, value) => {
    setFilter({ ...filter, [type]: value });
  };

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    const { title, rate } = filter;
    return (
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      (!rate || movie.rate >= parseFloat(rate))
    );
  });

  return (
    <div style={{ backgroundColor: "#020202", color: "white" }}>
      <Filter className="filter" onFilterChange={handleFilterChange} />
      <h2>Seulement sur Movie App</h2>
      <p className="pacc">
        Movie App offre une programmation originale unique.
        <br />
        Films, séries, programmes spéciaux et plus encore... <br />
        sur mesure, rien que pour vous.
      </p>
      <MovieList movies={filteredMovies} />
      <div className="addmovi">
        <AddMovieForm add={add} />
      </div>
    </div>
  );
};

export default Home;
