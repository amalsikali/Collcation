import React from "react";
import "./Home.css";

export default function HomeInfo() {
  return (
    <div className="row">
      <div className="col-md-4 infoContainer">
        <p className="infoTitle">CRÉÉ PAR DES DEVOKT POUR DES COLOCS</p>
        <p className="InfoContent">
          La Carte des Colocs est un site indépendant lancé en 2013 pour mettre
          fin à la domination des portails payants sur le secteur de la
          colocation en ligne. Grâce à un bouche-à-oreille constant, il est
          devenu en 2019 le principal site de colocation de France.
        </p>
      </div>
      <div className="col-md-4 infoContainer">
        <p className="infoTitle">SOUTENIR LE PROJET :</p>
        <div>
          <button class="shareFb">
            <i class="fab fa-facebook"> </i>
            Partager avec facebook
          </button>
          <button class="shareGoogle">
            <i class="fab fa-google "></i>
            Partager avec Google
          </button>
        </div>
      </div>
      <div className="col-md-4 infoContainer">
        <p className="infoTitle">SIMPLE, PRATIQUE ET 100% GRATUIT</p>
        <p className="InfoContent">
          Aucune commission arbitraire, le service rendu est gratuit. Toutes les
          annonces publiées sur le site sont vérifiées manuellement pour limiter
          la fraude au maximum. La recherche par carte et l'alerte e-mail
          géolocalisée vous font gagner un temps précieux.
        </p>
      </div>
    </div>
  );
}
