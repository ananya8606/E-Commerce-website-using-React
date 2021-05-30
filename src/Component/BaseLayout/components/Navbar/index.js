// Dependencies
import React from 'react';
import { useState} from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
// Internals
import './Navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CartModal from './Modal.js';
function Navbar() {  
  const [show,setShow]=useState(false);
  return (
    <div className="navbar">
<img className="header__logo" src="https://i.ibb.co/F3mbLZ8/images-1-1622266095067.jpg"/>

      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search for Clothing and Accessories" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Contact</span>
          <span className="header__optionLineTwo">us</span>
        </div>
</div>
    <div id="mod">
  <button onClick={() => setShow(true)} ><ShoppingBasketIcon />(<span class="total-count"></span>)</button><CartModal onClose={() => setShow(false)} show = {show} />
  </div>
  <div id="clear">
<button>Clear Cart</button>
</div>
</div>
  );
}
export default Navbar;








  


