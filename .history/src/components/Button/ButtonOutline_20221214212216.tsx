import React, { useContext, useState } from "react";
import "./ButtonOutline.scss";
import { Link, Navigate } from "react-router-dom";
import { MovieContext } from "../MovieContext/MovieContext";
import DatVe from "../DatVe/DatVe";
import MovieDetails from "../MovieDetails/MovieDetails";

interface ButtonOutlineProps {
  name: string;
  nameUrl?: string;
  age?: string;
}

function ButtonOutline({ nameUrl, age, name }: ButtonOutlineProps) {
  const movieContext = useContext(MovieContext);

  const handleChooseMovie = (name: string) => {
    movieContext?.setName(name);
    const localMovie = localStorage.setItem("movie", JSON.stringify(name));
  };

  return (
    <div
      onClick={() => {
        handleChooseMovie(name);
      }}
      className="ButtonOutline"
    >
      {age ? <div className="btn-age">{age}</div> : ""}
      <Navigate to={`/dat-ve/${nameUrl}`}  />
      Mua Vé
    </div>
  );
}

export default ButtonOutline;
