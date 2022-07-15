import React from 'react'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet News</h2>
      </div>
      <section className="container flex flex--centro">
        <article className="cartao post">
          <h2 className="cartao__titulo">Bathing your dog</h2>
          <p className="cartao__texto"> Most dogs prefer to skip bath time, but bathing plays an important role in the health of your dog's fur and skin, helping to keep it clean and free of dirt and parasites. Having the right products can help you feel more comfortable.</p>
        </article>
      </section>
    </main>
  )
}

export default Home
