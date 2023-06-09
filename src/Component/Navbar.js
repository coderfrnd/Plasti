import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button  from './Button';
import './Navbar.css'


function Navbar() {
    const[click,setclick]=useState(false);
    const [button,setButton]=useState(true)
    const handelchange = () =>{
        setclick(!click);
 
    }
    const closeMobile = () =>{
        setclick(false);
    }
    const showButton = () => {
     
    
        if(window.innerWidth <=  960) {
            setButton(false)
        }
        else{
            setButton(true)
        }
    };
    useEffect(() => {
        showButton();
    },[]);
    window.addEventListener('resize',showButton)
  return (<>
      <nav className='navbar'>
          <div className="navbar-container">
             <Link to='/' className='navbar-logo' onClick={closeMobile}>
             PLASTIC HUNT 
             <i class="fa-sharp fa-solid fa-bin-bottles-recycle"></i>
             <i className ='fab fa-typo3'></i>
             {/* <img src="./phuu.png" alt=""/> */}
             </Link>
             <div className="menu-icon" onClick={handelchange} >
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
             </div>
              <ul className={click ? 'nav-menu active ': 'nav-menu'}>
                  <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobile}>
                            Home
                        </Link>
                         </li>
                         <li className='nav-item'>
                      <Link to='/services' className='nav-links' onClick={closeMobile}>
                            Services 
                        </Link>
                         </li>
                         <li className='nav-item'>
                      <Link to='/products' className='nav-links' onClick={closeMobile}>
                            Product
                        </Link>
                         </li>
                         <li className='nav-item'>
                      <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobile}>
                            Sign-up 
                        </Link>
                         </li>


              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN-UP</Button>}
          </div>
          </nav>   

  </>);
}

export default Navbar;
 