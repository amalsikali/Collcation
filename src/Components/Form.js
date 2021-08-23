import React from "react";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  return (
    <div className="row bodyForm">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div className="formTitle">
          <h5>VOUS RECHERCHEZ UN(E) LOCATAIRE OU COLOCATAIRE ?</h5>
          <p>Déposez votre annonce gratuitement et en moins de 5 minutes :</p>
        </div>
        <form>
          <div className="FormContainer">
            <div className="Icon">
              <img src="https://img.icons8.com/office/40/000000/address.png" />
              <br />
              <label>Adresse</label>
            </div>
            <div className="Input">
              <input
                className="form-control"
                placeholder="ex:40 rue tougou sousse"
              ></input>
              <br />
              <p>
                L'adresse exacte ne sera pas affichée dans l'annonce, mais elle
                est nécessaire pour localiser votre logement sur la carte.
              </p>
            </div>
          </div>

          <div className="FormContainer">
            <div className="Icon">
              <img src="https://img.icons8.com/office/40/4a90e2/person-male.png" />
              <br />
              <label>Vous</label>
            </div>
            <div className="Input">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Vous êtes un(e) :
                </label>
                <div class="col-sm-10">
                  <select
                    class="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>-Sélectionner-</option>
                    <option value="1">Locataire/Collocataire</option>
                    <option value="2">Propriétaire</option>
                    <option value="3">Agence immobillière</option>
                    <option value="4">Résidence étudiante</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="FormContainer">
            <div className="Icon">
              <img src="https://img.icons8.com/office/40/4a90e2/new-contact.png" />
              <br />
              <label>Contacts</label>
            </div>
            <div className="Input">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">E-mail :</label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Téléphone (facultatif) :
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ex:+216 22222222"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div className="FormContainer">
            <div className="Icon">
              <img src="https://img.icons8.com/color/40/4a90e2/equal-housing-opportunity.png" />
              <br />
              <label>Logement</label>
            </div>
            <div className="Input">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Type d'annonce:{" "}
                </label>
                <div class="col-sm-10">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>-Sélectionner-</option>
                    <option value="1">Collocation</option>
                    <option value="2">Location</option>
                    <option value="3">Sous-location</option>
                    <option value="4">Chambre chez l'habitant</option>
                    <option value="5">Hébergement provisoire</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Colocs déja présents:{" "}
                </label>
                <div class="col-sm-10">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>-Sélectionner-</option>
                    <option value="0">0(inoccupé)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5plus">5 et +</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Logement: </label>
                <div class="col-sm-10">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>-Sélectionner-</option>
                    <option value="1">Apparrtement</option>
                    <option value="2">Maison</option>
                    <option value="3">Studio</option>
                    <option value="4">Duplex</option>
                    <option value="5">Loft/atelier</option>
                    <option value="6">Manoir/hotel particulier</option>
                    <option value="7">Chalet</option>
                    <option value="8">Ferme</option>
                    <option value="9">bateau/péniche</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Nombre de piéces:{" "}
                </label>
                <div class="col-sm-10">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>-Sélectionner-</option>
                    <option value="1">1 piéce</option>
                    <option value="2">2 piéces</option>
                    <option value="3">3 piéces</option>
                    <option value="4">4 piéces</option>
                    <option value="5">5 piéces et +</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Superficie (en m²):{" "}
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="en m²"
                  ></input>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Accessibilité handicapé:{" "}
                </label>
                <div class="col-sm-10">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>-Sélectionner-</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="FormContainer">
            <div className="Icon">
              <img src="https://img.icons8.com/office/40/4a90e2/kids-bedroom.png" />
              <br />
              <label>Chambre</label>
            </div>
            <div className="Input">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Taille (en m²):{" "}
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="en m²"
                  ></input>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Meublée:</label>
                <div class="col-sm-10">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>-Sélectionner-</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Disponible à partir:{" "}
                </label>
                <div class="col-sm-10">
                  <input type="date" className="form-control"></input>
                </div>
              </div>
            </div>
          </div>

          <div className="FormContainer">
            <div className="Icon">
              <img src="https://img.icons8.com/carbon-copy/60/4a90e2/money.png" />
              <br />
              <label>Loyer</label>
            </div>
            <div className="Input">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Loyer(sans charges):{" "}
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="en dinar"
                  ></input>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Charges: </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="en dinar"
                  ></input>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Caution: </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="en dinar"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div className="FormContainer">
            <div className="Icon">
              <img src="https://img.icons8.com/ios/50/4a90e2/rules.png" />
              <br />
              <label>Régles</label>
            </div>
            <div className="Input">
              <div className="display-container">
                <div className="display">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    ></input>
                    <label class="form-check-label" for="inlineCheckbox1">
                      Filles uniquement
                    </label>
                  </div>
                  <br />
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    ></input>
                    <label class="form-check-label" for="inlineCheckbox2">
                      {" "}
                      Garçons uniquement
                    </label>
                  </div>
                </div>

                <div className="display">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    ></input>
                    <label class="form-check-label" for="inlineCheckbox2">
                      Fumeurs autorisées
                    </label>
                  </div>
                  <br />
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    ></input>
                    <label class="form-check-label" for="inlineCheckbox2">
                      Animaux autorisés
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="FormContainer">
            <div className="Icon">
              <img src="https://img.icons8.com/office/40/4a90e2/new-message.png" />
              <br />
              <label>Message</label>
            </div>
            <div className="Input">
              <textarea className="form-control" rows="4"></textarea>
            </div>
          </div>

          <div className="FormContainer">
            <div className="Icon">
              <img src="https://img.icons8.com/fluency/48/4a90e2/photo-editor.png" />
              <br />
              <label>Photos</label>
            </div>
            <div className="Input">
              <input type="file" class="form-control-file"></input>
            </div>
          </div>

          <div className="container">
            <p>
              {" "}
              Je souhaite avoir accès aux locataires & colocatairesdes
              partenaires de La Carte des Colocs :
            </p>
            <div className="">
              <input type="checkbox"></input>
              <label>Inscrivez-vous gratuitement sur notre site</label>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}
