import React from 'react'
import CardItem from '../Carditem';
import './Sevic.css';
function Services() {
  return (
    <div className='cards'>
    <h1>Check out Our Products !</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
        
          <CardItem
            src='images/bricks.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Luxury'
            path='/services'
          />
            <CardItem
            src='images/bricks house.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Luxury'
            path='/services'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            src='images/machine.jpg'
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            label='Mystery'
            path='/services'
          />
          <CardItem
            src='images/shantanu.jpg'
            text='Experience Football on Top of the Himilayan Mountains'
            label='Adventure'
            path='/products'
          />
          <CardItem
            src='images/ritik.jpg'
            text='Ride through the Sahara Desert on a guided camel tour'
            label='Adrenaline'
            path='/sign-up'
          />
        </ul>
        <ul className='cards__items'>
        <CardItem
            src='images/ladey.jpg'
            text='Ashutosh Pandey (B-Tech 3rd year student)'
            label='Starter'
            path='/services'
          />
          <CardItem
            src='images/ST.jpg'
            text='Shantanu Tiwari (B-Tech 3rd year student)'
            label='Starter'
            path='/services'
          />
          <CardItem
            src='images/ritiiik12.jpg'
            text='Ritik Deepankar (B-Tech 3rd year student)'
            label='Starter'
            path='/services'
          />


        </ul>
      </div>
    </div>
  </div>
   
  );
}

export default Services