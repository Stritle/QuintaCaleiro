import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <h1>Produzimos vinhos da região do Douro que contam histórias</h1>
                <p>A Quinta do Caleiro dedica-se a criar vinhos destintos e momeraveis, 
                    que contam histórias a cada gole.
                    O nosso compromisso é produzirmos o melhor vinho tinto da região do Douro 
                    através de muita dedicação, conhecimento e de um trabalho árduo, tanto nas
                    nossas vinhas como na nossa adega, possibilitando assim uma experiencia de
                     multiplas sensações a quem degusta o nosso vinho.                  
                
                </p>

                <div>

                    <Link to="/historia"> A NOSSA HISTÓRIA</Link>
                    <Link to="/vinho">VINHOS</Link>
                    
                </div>
                {/* <div className="ajustebot"></div> */}
            </div>
        )
    }
}
