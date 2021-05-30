//Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
//Internals
import PRODUCTS from '../../Data';

const MenItems = () => (
  <div className="items">
    {PRODUCTS.map((product) => {
      if (product.gender === "men") {
        return(
          <div className="item">
            <div className="product-img">
              <img alt={product.name} src={product.img} />
            </div>
            <div className="product-details">
              <h1 id="product-name">{product.name}</h1>
   <Link to={`/products/${product.id}`}>
              <h4 id="product-description">{product.description}</h4>
            </Link>
            </div>
            <div className="price-add">
              <h5 id="product-price">${product.price}</h5>
              <button>Add to Cart</button>
            </div>
          </div>
        )
      }
    })}
  </div>
)

export default MenItems;