import React, { useContext, useState } from "react";
import "./ButtonOutline.scss";
import { Link } from "react-router-dom";
import { MovieContext } from '../MovieContext/MovieContext';
import DatVe from "../DatVe/DatVe";
import MovieDetails from "../MovieDetails/MovieDetails";

interface ButtonOutlineProps {
  name: string;
  nameUrl?: string;
  age?: string;
}

function ButtonOutline({ nameUrl, age, name }: ButtonOutlineProps) {

  const movieContext = useContext(MovieContext);

console.log(name);

  

  return (
    <div className="ButtonOutline">
      {age ? <div className="btn-age">{age}</div> : ""}
      <Link to={`/dat-ve/${nameUrl}`}>Mua Vé</Link>
      
    </div>
  );
}

export default ButtonOutline;
