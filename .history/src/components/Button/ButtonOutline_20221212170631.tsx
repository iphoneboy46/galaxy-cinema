import React from "react";
import "./ButtonOutline.scss";
import { Link } from "react-router-dom";

interface ButtonOutlineProps {
  name: string;
  nameUrl?: string;
  age?: string;
}

function ButtonOutline({ nameUrl, age, name }: ButtonOutlineProps) {

  const handleChooseMovie = (name: string) =>{

  }

  return (
    <div onclick={()=>{handleChooseMovie(name)}} className="ButtonOutline">
      {age ? <div className="btn-age">{age}</div> : ""}
      <Link to={`/dat-ve/${nameUrl}`}>Mua Vé</Link>
    </div>
  );
}

export default ButtonOutline;
