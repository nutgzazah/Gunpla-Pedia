import React from 'react'
import { AiFillStar } from "react-icons/ai";

const Card = ({img, name, star, totalrating }) => {
  return (
        <section className="cards">
          <img src={img} className="cards-img" alt={name}></img>
          <div className="card-details">
            <h3 className="card-name">{name}</h3>
            <section className="card-reviews">
              <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
              <span className="totalrating">{totalrating}</span>
              <button className="product-button">Add collection</button>
            </section>
          </div>
        </section>
  )
}

export default Card