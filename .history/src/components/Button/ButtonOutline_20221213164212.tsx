import React, { useContext } from "react";
import "./ButtonOutline.scss";
import { Link } from "react-router-dom";
import { MovieContext } from '../MovieContext/MovieContext';

interface ButtonOutlineProps {
  name: string;
  nameUrl?: string;
  age?: string;
}

function ButtonOutline({ nameUrl, age, name }: ButtonOutlineProps) {

  const movieContext = useContext(MovieContext);
 

  const handleChooseMovie = (name: string) =>{
    movieContext?.setName(name);
  }

  window.onload = () =>{
    movieContext?.setName(name)
  }

  return (
    <div onClick={()=>{handleChooseMovie(name)}} className="ButtonOutline">
      {age ? <div className="btn-age">{age}</div> : ""}
      <Link to={`/dat-ve/${nameUrl}`}>Mua Vé</Link>
    </div>
  );
}

export default ButtonOutline;
