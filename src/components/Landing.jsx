import React from 'react'
import Party from '../assets/party.png'

const Landing = () => {
  return (
<section id='landing'>
<header>
    <div className="header__container">
        <div className="header__description">
            <h1>Satisfy your sweet tooth with our delicious Desserts!</h1>
            <h2>Find your sweets in our <span className="blue">Inventory</span></h2>
            <button
            className="btn"
            onClick={() => {
                const section =
                document.getElementById("features");
                section?.scrollIntoView({ behavior:
                    "smooth" });
            }}
            >Browse Books
            </button>
        </div>
        <figure className="header__img--wrapper">
            <img src={ Party } alt="" />
        </figure>
    </div>
</header>
</section>
  )
}

export default Landing
