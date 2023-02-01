import React from "react";
import "./ButtonOutline.scss";
import { Link } from "react-router-dom";

interface ButtonOutlineProps {
  nameUrl?: string;
  age?: string;
}

function ButtonOutline({ nameUrl, age }: ButtonOutlineProps) {
  return (
    <div className="ButtonOutline">
      {age ? <div className="btn-age">{age}</div> : ""}

      <Link to={`/dat-ve/${nameUrl}`}>Mua Vé</Link>
    </div>
  );
}

export default ButtonOutline;
