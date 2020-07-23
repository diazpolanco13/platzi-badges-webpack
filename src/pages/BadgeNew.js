import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        {/* Barra de navegacion */}
        <Navbar />
        {/* Componente hero */}
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        {/* Badge del usuario */}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Carlos"
                lastName="Diaz"
                twitter="diazpolanco13"
                jobTitle="Estudiante de Platzi"
                avatarUrl="https://en.gravatar.com/userimage/117147537/57b9084d31410d1a358b8e0318b19b84?size=200"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
