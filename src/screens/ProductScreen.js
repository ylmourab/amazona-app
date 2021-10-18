import React from 'react'
import { Link } from 'react-router-dom'
import Ratings from '../components/Ratings'
import data from '../data'


function ProductScreen(props) {
    const product = data.products.find(x => x.id === props.match.params.id)
    if (!product){
        return <div>Product not found</div>
    }
    
    return (
      <div>
          <Link to="/">Back to result</Link>

      
        <div className="row top">
            <div className="col-2">
                <img className="large" src={product.image} alt=""/>
                

            </div>
            <div className="col-1">
            <ul>
                <li><h1>{product.name}</h1></li>
                <li>
                <Ratings ratings = {product.rating} review = {product.numReviews}/>
                </li>
                <li>
                    Price : {product.price} €
                </li>
                <li>
                    Description : {product.description}
                </li>
            </ul>
            </div>
            
        
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li className="row">  
                        <div>Price : </div> <div className="">{product.price} €</div></li>
                        <li className="row">
                        <span> Status </span>
                        {product.countInStock>0 ?  <span className="success"> In stock </span> : <span className="error"> Unavailaible </span>}

                        </li>
                        <li >
                        <button className ="primary block">Add to cart</button>
                       

                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductScreen
