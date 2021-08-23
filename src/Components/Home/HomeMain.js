import React from "react";
import CityCard from "./CityCard";
import "./Home.css";
import cities from "./cities";
import { Card } from "react-bootstrap";
export default function HomeMain() {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        {cities.map((city) => (
          <CityCard
            key={city.id}
            img={city.img}
            alt={city.name}
            title={city.name}
          />
        ))}
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}
