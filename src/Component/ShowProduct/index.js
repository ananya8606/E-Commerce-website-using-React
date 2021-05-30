//Dependencies
import React, { Component } from 'react';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
//Internals
import PRODUCTS from '../Data';
import './index.css';

class ShowProduct extends Component {
  render () {
    const product = find(PRODUCTS, ['id', parseInt(this.props.match.params.id)]);
    const currentProduct = product;
    return (
      <div className="show-product">
        <div className="item-wrapper">
          <div className="item-image">
            <img className="product-image" src={currentProduct.img} alt="product" />
          </div>
          <div className="item-name">
            <div className="product-info">
              <h3 id="product-name">{currentProduct.name}</h3>
            </div>
            <div className="product-bio">
              <p id="product-descript">{currentProduct.description}</p>
                    <div className="price-add">
              <p id="product-price">${currentProduct.price}</p>
              <button>Add to Cart</button>
              </div>
            </div>
<h2 id="Rating">Star Rating</h2>
<div class="star-ratings-sprite">
<span class="star-ratings-sprite-rating"></span></div>
          </div>
        </div>
        <div className="similar-products">
          <h5 id="fontchange">You might also like</h5>
          {PRODUCTS.map((product) => {
            if (
              product.gender === currentProduct.gender
              && product.type === currentProduct.type
              && product.name !== currentProduct.name) {
              return(
                  <div key={product.id} className="item">
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
      </div>
    );
  }
}

export default ShowProduct;