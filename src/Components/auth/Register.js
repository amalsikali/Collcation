import React from "react";
import "./Auth.css";
export default function Register() {
  return (
    <div className="body">
      <div className="loginContainer">
        <form>
          <h3>S'inscrire</h3>

          <div className="form-group">
            <label>Prénom</label>
            <input type="text" className="form-control" placeholder="Prénom" />
          </div>

          <div className="form-group">
            <label>Nom</label>
            <input type="text" className="form-control" placeholder="Nom" />
          </div>

          <div className="form-group">
            <label>Adresse Email </label>
            <input
              type="email"
              className="form-control"
              placeholder="Entrer votre email"
            />
          </div>

          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              className="form-control"
              placeholder="Entrer le mot de passe"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block ">
            S'inscrire
          </button>
          <p className="forgot-password text-right">
            Déja inscrit <a href="#">S'identifier?</a>
          </p>
          <hr class="my-4"></hr>

          <div class="d-grid mb-2">
            <button
              class="btn  btn-google btn-block fw-bold text-uppercase"
              type="submit"
            >
              <i class="fab fa-google me-2"></i> S'inscrire avec google
            </button>
          </div>

          <div class="d-grid">
            <button
              class="btn btn-facebook btn-block fw-bold text-uppercase"
              type="submit"
            >
              <i class="fab fa-facebook-f me-2"></i> S'inscrire avec facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
