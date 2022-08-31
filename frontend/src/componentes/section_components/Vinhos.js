import React, { Component } from "react";
import v1 from "../../images/v1.png";

import { Link } from "react-router-dom";

export default class Vinhos extends Component {
  render() {
    return (
      <div className="vinhos">
        <h1>Aromas Elegantes</h1>
        <h3>“...vindima de cada sonho...”</h3>
        <div className="flex-conf">
          <div className="garrafa">
            <img src={v1} alt="vinho"></img>
            <p>BRANCO VIOSINHO | 2018</p>
          </div>
          <div className="garrafa">
            <img src={v1} alt="vinho"></img>
            <p>ROSÉ WINE | 2018</p>
          </div>
          <div className="garrafa">
            <img src={v1} alt="vinho"></img>
            <p>RESERVA TINTO | 2012</p>
          </div>
          <div className="garrafa">
            <img src={v1} alt="vinho"></img>
            <p>VINTAGE PORT 2017</p>
          </div>
        </div>
        <div className="button">
          <Link to="/vinho">VISITAR A LOJA</Link>
        </div>
        {/* <div className="ajustebot"></div> */}
      </div>
    );
  }
}
