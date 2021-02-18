import React from "react";
import Product from "./Product";
import "./Home.css";

export default function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          className='home__image'
        />
      </div>
      <div className='home__row'>
        <Product
          id='1'
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={12.99}
          image='https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png'
          rating={3}
        />
        <Product
          id='2'
          title='Macbook pro 2020 M1'
          price={1898}
          image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000'
          rating={5}
        />
      </div>
      <div className='home__row'>
        <Product
          id='1'
          title='The lean startup'
          price={12.99}
          image='https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png'
          rating={3}
        />
        <Product
          id='2'
          title='Macbook pro 2020 M1'
          price={1898}
          image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000'
          rating={5}
        />
        <Product
          id='1'
          title='The lean startup'
          price={12.99}
          image='https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png'
          rating={3}
        />
      </div>
      <div className='home__row'>
        <Product
          id='1'
          title='The lean startup'
          price={12.99}
          image='https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png'
          rating={3}
        />
      </div>
    </div>
  );
}
