import React from 'react'
import '../assets/css/componentes/cartao.css'

const About = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">About Doguito</h2>
      </div>
      <section className="container flex flex--centro">
        <article className="cartao">
          The doguito blog was created to ask several questions about the pet's world!
        </article>
      </section>
      <section className="container flex flex--centro">
        <article className="cartao">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit aperiam hic cupiditate necessitatibus unde quod voluptatibus et rerum porro ipsa, ducimus, blanditiis error, repellat pariatur atque dicta assumenda corrupti alias.
        </article>
      </section>
      <section className="container flex flex--centro">
        <article className="cartao">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit aperiam hic cupiditate necessitatibus unde quod voluptatibus et rerum porro ipsa, ducimus, blanditiis error, repellat pariatur atque dicta assumenda corrupti alias.
        </article>
      </section>
    </main>
  )
}

export default About
