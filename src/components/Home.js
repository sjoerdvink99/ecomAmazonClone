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
          title='Macbook pro 2020 with the new M1 Silicon chip'
          price={1898}
          image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000'
          rating={5}
        />
      </div>
      <div className='home__row'>
        <Product
          id='3'
          title='Apple Smartwatch 41mm with bluetooth and voice assistant'
          price={599.99}
          image='https://media.s-bol.com/qjV6w6ZBLrk3/550x676.jpg'
          rating={5}
        />
        <Product
          id='4'
          title='Studio Headphones for great audio quality'
          price={98.95}
          image='https://images-na.ssl-images-amazon.com/images/I/41srzfxYpXL._AC_.jpg'
          rating={3}
        />
        <Product
          id='5'
          title='TechNet keyboard for professional use'
          price={143.0}
          image='https://media.s-bol.com/grDDRn1xv9D/550x392.jpg'
          rating={2}
        />
      </div>
      <div className='home__row'>
        <Product
          id='6'
          title='Magic Mous for desktop'
          price={86.9}
          image='https://shop.sansoftcomputers.nl/media/image/541/gigabyte-m5050-curvy-optical-mous-muis.jpg'
          rating={4}
        />
      </div>
    </div>
  );
}
