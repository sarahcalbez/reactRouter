import React from "react";
import image from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

const Page404 = () => {
    return (
        <main className="container flex flex--centro flex--coluna" >
            <img className="doguito-imagem"src={image} alt="Dog picture" />
            <p className="naoencontrado-texto">
                Error404
            </p>
            <p className="naoencontrado-texto">
                Woops! This page doesn't exist!
            </p>
        </main>

    )
}

export default Page404