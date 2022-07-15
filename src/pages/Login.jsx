import React from 'react'
import '../assets/css/componentes/botao.css';
import '../assets/css/componentes/cabecalho.css';

const Login = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Login</h2>
      </div>
      <section className="container flex flex--centro">
        <div className="container">
          <label className="cartao__margin">
            <label className="cartao__titulo_login">
              E-mail
              <input className="input" type="text" name="email" />
            </label>
            {/* <br></br> */}
            <label className="cartao__titulo_login">
              Password
              <input className="input" type="text" name="keyword" />
            </label>
          </label>
        </div>
      </section>
      <section className="container flex flex--centro">
        <button className="menu-item menu-item--entrar" type="submit" onclick="submitForm()">Enter</button>
      </section>

    </main>
  )
}

export default Login