import React from 'react'
import data from '../data.js';
import Products from '../components/Products';

function HomeScreen() {
    return (
        <div>
        <div className="row center">
          {
            data.products.map(product =>(
              <Products key = {product.id} product={product}/>

            ))

          }
       

        </div>
      </div>
    )
}

export default HomeScreen
