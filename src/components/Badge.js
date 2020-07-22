import React from "react";
import confLogo from "../images/badge-header.svg";
import "../components/";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt=" Logo de la confernecia" />
        </div>
        <div>
          <img src="" alt="Avatar" />
          <h1>
            Carlos <br /> Diaz
          </h1>
        </div>
        <div>
          <p>Fronted Enginere</p>
          <p>diazpolanco13</p>
          <div>#PlatziConf</div>
        </div>
      </div>
    );
  }
}

export default Badge;
