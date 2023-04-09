import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Our Products !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          
            <CardItem
              src='images/bricks.jpg'
              // text='Travel through the Islands of Bali in a Private Cruise'
              text='Plastic eco-bricks or bottle bricks, are a sustainable building material made by stuffing plastic waste into plastic bottles '
              label='Bricks'
              path='/services'
            />
              <CardItem
              src='images/tiles.jpg'
              text='Plastic eco-tiles or bottle tiles, are a sustainable Housing material made by stuffing plastic waste into plastic bottles'
              label='tiles'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/fuel.webp'
              text='Plastic fuel, also known as Plastofuel or Plastfuel-(Enviorment Friendly) '
              label='Fuel'
              path='/services'
            />
            <CardItem
              src='images/bench.webp'
              text='Plastic fuel, also known as Plastofuel or Plastfuel-(Enviorment Friendly)'
              label='Furniturer'
              path='/products'
            />
            {/* <CardItem
              src='images/ritik.jpg'
              text='Plastic fuel, also known as Plastofuel or Plastfuel-(Enviorment Friendly)'
              label='Adrenaline'
              path='/sign-up'
            /> */}
          </ul>
         <div className="contri">
          {/* <marquee behavior="alternate" direction="right"> */}
          <h1>Core-Members</h1>

          {/* </marquee> */}
         </div>

          <ul className='cards__items'>
          <CardItem
              src='images/ladey.jpg'
              text='(B-Tech 3rd year EIE)'
              label='Ashutosh Pandey'
              path='/services'
            />
            <CardItem
              src='images/ST.jpg'
              text='(B-Tech 3rd year EIE) '
              
              // text1='(B-Tech 3rd year student)'
              label='Shantanu Tiwari '
              path='/services'
            />
            <CardItem
              src='images/ritiiik12.jpg'
              text='(B-Tech 3rd year EIE)'
              label='Ritik Deepankar '
              path='/services'
            />
             <CardItem
              src='images/myimg-2.png'
              text='(B-Tech 3rd year EIE)'
              label='Abhishek Jaiswal '
              path='/services'
            />


          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;