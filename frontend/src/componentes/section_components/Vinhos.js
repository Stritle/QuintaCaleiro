import React, { Component } from 'react'
import v1 from '../../images/v1.png'
import { Link } from 'react-router-dom'

export default class Vinhos extends Component {
    render() {
        return (
            <div className="vinhos">
                <h1>Vinhos Disponiveis para Venda</h1>
                <div className="flex-conf">
                    <div className="garrafa">
                        <img src={v1} alt="vinho"></img>
                        <p>2017 LA BELLE PROMENADE CHARDONNAY</p>
                    </div>
                    <div className="garrafa">
                        <img src={v1} alt="vinho"></img>
                        <p>2017 LA BELLE PROMENADE PINOT NOIR</p>
                    </div>
                    <div className="garrafa">
                        <img src={v1} alt="vinho"></img>
                        <p>2016 EXTRA BRUT SPARKLING WINE</p>
                    </div>
                    <div className="garrafa">
                        <img src={v1} alt="vinho"></img>
                        <p>2016 EXTRA BRUT SPARKLING WINE</p>
                    </div>
                </div>
                <div className="button">
                    <Link to="/vinho">VISITAR A LOJA</Link>
                </div>
                {/* <div className="ajustebot"></div> */}
            </div>
        )
    }
}
