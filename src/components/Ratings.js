import React from 'react'

function Ratings(props) {
    const {ratings, review} = props
    return (
        <div className="rating">
                  <span> <i className={ratings >=1 ? "fa fa-star" : ratings >=0.5 ? "fa fa-star-half": "fa fa-star-o"}></i> </span>
                  <span> <i className={ratings >=2 ? "fa fa-star" : ratings >=1.5 ? "fa fa-star-half" : "fa-star-half-o"}></i> </span>
                  <span> <i className={ratings >=3 ? "fa fa-star" : ratings >=2.5 ? "fa fa-star-half": "fa-star-half-o"}></i> </span>
                  <span> <i className={ratings >=4 ? "fa fa-star" : ratings >=3.5 ? "fa fa-star-half": "fa-star-half-o"}></i> </span>
                  <span> <i className={ratings ==5 ? "fa fa-star" : ratings >=4.5 ? "fa fa-star-half": "fa-star-half-o"}></i> </span>
                  <p>{review} Reviews</p>

      
                  
        </div>
    )
}

export default Ratings
