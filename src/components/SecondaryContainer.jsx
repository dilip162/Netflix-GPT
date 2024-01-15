import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  console.log(movies.popularMovies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-24 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Most Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcomming"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Originals"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Comedy"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
