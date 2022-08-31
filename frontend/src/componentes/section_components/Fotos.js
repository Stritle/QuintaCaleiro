import React, { Component } from "react";
import vinhoFotos from "../../images/vinhoFotos.jpg";
import vinhaFotos from "../../images/vinhaFotos.jpg";
import eventosFotos from "../../images/eventosFotos.jpg";
import visitasFotos from "../../images/visitasFotos.png";
import { Link } from "react-router-dom";

export default class Fotos extends Component {
  render() {
    const style1 = {
      backgroundImage: `url(${vinhoFotos})`,
    };
    const style2 = {
      backgroundImage: `url(${visitasFotos})`,
    };
    const style3 = {
      backgroundImage: `url(${vinhaFotos})`,
    };
    const style4 = {
      backgroundImage: `url(${eventosFotos})`,
    };
    return (
      <div className="fotos">
        <div className="fotos-ajuste">
          <div className="parent">
            <Link to="/vinho">
              <h3 className="vinhos-btn">O Vinho</h3>
            </Link>
            <div className="child" style={style1}></div>
          </div>
          <div className="parent">
            <Link to="/quinta">
              <h3 className="visitas-btn">Visitas</h3>
            </Link>
            <div className="child" style={style2}></div>
          </div>
          <div className="parent">
            <Link to="/quinta">
              <h3 className="eventos-btn">Eventos </h3>
            </Link>
            <div className="child" style={style3}></div>
          </div>
          <div className="parent">
            <Link to="/quinta">
              <h3 className="vinha-btn">A Vinha</h3>
            </Link>
            <div className="child" style={style4}></div>
          </div>
        </div>
        {/* <div className="ajustebot"></div> */}
      </div>
    );
  }
}
