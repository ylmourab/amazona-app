import React from 'react'
import Ratings from './Ratings'

function Products(props) {
    const {product} = props
    
    return (
        
            <div key = {product.id} className="card">
              <a href="product.html">
         
                <img className="medium" src={product.image} alt="product" />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>{product.name}</h2>
                </a>
                <Ratings ratings = {product.rating} review = {product.numReviews}/>
                <div className="price">{product.price} €</div>
              </div>
            </div>
     
    )
}

export default Products
