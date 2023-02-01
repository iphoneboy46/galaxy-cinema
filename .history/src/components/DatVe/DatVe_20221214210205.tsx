import React, { useContext, useEffect } from "react";
import { MovieContext } from "../MovieContext/MovieContext";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./DatVe.scss";



function DatVe() {
  const movieContext = useContext(MovieContext);
  const nameMovie = localStorage.getItem('movie');
  console.log(nameMovie);

 

  return (
    <div className="dat-ve">
      <div className="dat-ve-left">
        <MovieDetails name={movieContext?.name} />
      </div>
      <div className="dat-ve-right"></div>
    </div>
  );
}

export default DatVe;
