import React from "react";
import image from "../assets/img/doguito.svg";
import { Link } from 'react-router-dom';
import '../assets/css/componentes/cabecalho.css';

const Cabecalho = () => {
    return (
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburger__icone">
                </span>
            </div>
            <div className="cabecalho-container">
                <a href="/" className="flex flex--centro">
                    <img className="cabecalho__logo" src={image} alt="Logo doguito" />
                    <h1 className="cabecalho__titulo">Petshop</h1>
                </a>
            </div>  
            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    {/* When you use the Link tag the webpage didn't reload when you click on the menu */}
                    <li><Link to="#" className="menu-item menu-item--entrar">Login</Link></li>
                    <li><Link to="#" className="menu-item">Products</Link></li>
                    <li><Link to="/" className="menu-item">Blog</Link></li>
                    <li><Link to="/about" className="menu-item">About</Link></li>
                </ul>
            </nav>
            <div className="menu-cabecalho-background">
            </div>
        </header>
    )
}

export default Cabecalho