import React from 'react';
import './Header.css';
import Image from '../../assets/image/img-1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <Nav />
      <Body />
    </div>
  );
}
function Nav() {
  return (
    <div className="nav">
      <div className="logo_container">
        <img src={Image} alt="Logo" />
      </div>
      <ul className="menu_container">
        <MenuLink textContet={'Home'} />
        <MenuLink textContet={'Product'} />
        <MenuLink textContet={'About'} />
        <MenuLink textContet={'Contact'} />
      </ul>
    </div>
  );
}

function MenuLink({ textContet }) {
  return (
    <li>
      <a href="./index.html" className="menu_link">
        {textContet}
      </a>
    </li>
  );
}

function Body() {
  return (
    <div className="title">
      <div>
        <h2>Product</h2>
        <p>Explore our curated collection of unique handmade products.</p>
      </div>
      <div className="search_cart">
        <div className="search">
          <input type="text" placeholder="Search for items" />
          <FontAwesomeIcon className="search_icon" icon={faSearch} />
        </div>
        <FontAwesomeIcon className="cart" icon={faCartShopping} />
      </div>
    </div>
  );
}
export default Header;
