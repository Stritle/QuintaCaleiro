import React, { Component } from "react";
import logo from "../images/logoCabril.png";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          <h3>Contactos</h3>
          <p>SEDE - RUA JOSÉ MARIA PEDROTO 23 / 9º / 29ª 4200 - 351 PORTO</p>
          <p> ADEGA - PARALELA DE GUIÃES</p>
          <p> 5060 - 161 SABROSA / DOURO</p>
          <p>info@GERAL@QUINTADOCABRIL.PT</p>
          <p>+351 96 405 57 34</p>
        </div>
        <div className="footer-center">
          <img src={logo} alt="Quinta do Caleiro"></img>
          <h6>© 2022 Quinta Do Cabril</h6>
        </div>
        <div className="footer-right">
          <h3>Redes Sociais</h3>
          <div className="rotaçao">
            <a href="google.pt">
              <FiInstagram />
            </a>
            <a href="google.pt">
              <FaFacebookF />
            </a>
            <a href="google.pt">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
