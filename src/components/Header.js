import React from "react";
import { Search, ShoppingBasket } from "@material-ui/icons";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          className='header__logo'
        />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='textfield' />
        <Search className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello</span>
          <span className='header__optionLineTwo'>Sign in</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__optionLineTwo header__basketCount'>0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
