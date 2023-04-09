import React from 'react'
import CardItem from '../Carditem';
import './Sevic.css';
function Products() {
  return (
    <div className='cards'>
    <h1>Check out Our Products !</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
        
          <CardItem
            src='images/obrick.jpg'
            text=' Plastic Bricks use of plastic in construction products is compatible with long-term development and helps to improve environmental circumstances. Its use as a raw material in the production of bricks is discussed in the following section of the paper.'
            label='Luxury'
            path='/services'
          />
           <CardItem
            src='images/fuel.webp'
            text=' Fuel is the key player for any nation so Another way to use ocean plastic is to convert it into fuel. This process, known as pyrolysis, involves heating the plastic to high temperatures in the absence of oxygen, which breaks it down into a liquid fuel .'
            label='Luxury'
            path='/services'
          />

        </ul>
        <ul className='cards__items'>
        
        <CardItem
          src='images/bench.webp'
          text='Plastic plywood has several advantages over traditional wood-based plywood. It is more resistant to moisture, rot, and insects, making it ideal for use in outdoor applications such as decking, fencing, and furniture. It is also a sustainable alternative to traditional plywood since it makes use of plastic waste that would otherwise end up in landfills or oceans'
          path='/services'
        />
         <CardItem
          src='images/tiles.jpg'
          text='Building materials: Like ROOF/TILES/and some other products which can change and imapct the society and help Nature Some companies are also using ocean plastic to create building materials, such as bricks, roof tiles, and insulation. This not only helps to reduce waste but also provides an alternative to traditional building materials, which can be harmful to the environment.          '
          label='Luxury'
          path='/services'
        />

      </ul>
       
      </div>
    </div>
  </div>
   
  );
}

export default Products