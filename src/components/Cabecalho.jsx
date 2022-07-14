import React from "react";
import image from "../assets/img/doguito.svg";
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
                    <li><a href="#" className="menu-item menu-item--entrar">Login</a></li>
                    <li><a href="#" className="menu-item">Products</a></li>
                    <li><a href="/" className="menu-item">Blog</a></li>
                    <li><a href="/about" className="menu-item">About</a></li>
                </ul>
            </nav>
            <div className="menu-cabecalho-background">
            </div>
        </header>
    )
}

export default Cabecalho