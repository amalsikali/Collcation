import React from "react";
import "./Auth.css";
export default function Login() {
  return (
    <div className="body">
      <div className="loginContainer">
        <form>
          <h3>S'identifier</h3>

          <div className="form-group ">
            <label>Adresse Email</label>
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
              placeholder="Entrer votre mot de passe"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Souviens-toi de moi
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            S'identifier
          </button>
          <p className="forgot-password text-right">
            Vous-avez oublier votre <a href="#">mot de passe?</a>
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
