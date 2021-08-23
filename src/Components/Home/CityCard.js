import React from "react";
import "./Home.css";
export default function CityCard(props) {
  return (
    <div className="card cardContainer" onClick="">
      <img src={props.img} alt={props.alt} />
      <div class="card-img-overlay text-center cardText">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}
