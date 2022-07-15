import React from 'react'
import '../assets/css/componentes/cartao.css'

const Products = () => {

    return (
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Products</h2>
            </div>
            <section className="container flex flex--centro">
                <article className="cartao">

                    <ul className="menu-itens">
                        {/* When you use the Link tag the webpage didn't reload when you click on the menu */}
                        <article className="cartao">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore qui id, consectetur ullam ab eaque tempore libero accusantium dolore molestiae. Possimus assumenda natus sed facilis nostrum iusto maiores. Hic, voluptatibus! </li>
                        </article>
                        <article className="cartao">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore qui id, consectetur ullam ab eaque tempore libero accusantium dolore molestiae. Possimus assumenda natus sed facilis nostrum iusto maiores. Hic, voluptatibus! </li>
                        </article>
                    </ul>
                    <ul className="menu-itens">
                        {/* When you use the Link tag the webpage didn't reload when you click on the menu */}
                        <article className="cartao">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore qui id, consectetur ullam ab eaque tempore libero accusantium dolore molestiae. Possimus assumenda natus sed facilis nostrum iusto maiores. Hic, voluptatibus! </li>
                        </article>
                        <article className="cartao">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore qui id, consectetur ullam ab eaque tempore libero accusantium dolore molestiae. Possimus assumenda natus sed facilis nostrum iusto maiores. Hic, voluptatibus! </li>
                        </article>
                    </ul>


                </article>

            </section>
        </main>
    )
}

export default Products