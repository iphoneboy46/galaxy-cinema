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
 const [name1,setName1] = useState(name)

  const handleChooseMovie = (name: string) =>{
    movieContext?.setName(name);
    setName1(name);
  }
console.log(name1);
  

  return (
    <div onClick={()=>{handleChooseMovie(name)}} className="ButtonOutline">
      {age ? <div className="btn-age">{age}</div> : ""}
      <Link to={`/dat-ve/${nameUrl}`}>Mua Vé</Link>
      <div style={{display: 'none'}}><MovieDetails name1={name1} /></div>
    </div>
  );
}

export default ButtonOutline;
