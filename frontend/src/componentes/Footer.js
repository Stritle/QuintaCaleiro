import React, { Component } from 'react'
import logo from '../images/logo.png'
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';


export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-left">
                    <h3>Contactos</h3>
                    <p>Chamisal Vineyard 7525 Orcutt Road San Luis Obispo, CA 93401</p>
                    <p>805-541-9463</p>
                    <p>info@chamisalvineyards.com</p>
                </div>
                <div className="footer-center">
                    <img src={logo} alt="Quinta do Caleiro"></img>
                    <h6>© 2020 IgnitedBytes</h6>
                </div>
                <div className="footer-right">
                    <h3>Redes Sociais</h3>
                    <div className="rotaçao">
                        <a href="google.pt"><FiInstagram /></a>
                        <a href="google.pt"><FaFacebookF /></a>
                        <a href="google.pt"><FaWhatsapp /></a>
                    </div>
                </div>

            </div>
        )
    }
}
