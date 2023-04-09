import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
          <p className="footer-subscription-heading">
              Join the Adventure newsletter to receive our best vacation deals 
          </p>
          <p className="footer-subscription-text">
              you can unsubscribe at any time 
          </p>
          <div className="input-areas">
               <form>
                   <input type="email" className='footer-input'
                   name='email'
                   placeholder='your-email'
                    />
                    <Button buttonStyle="btn--outline">Subscribe</Button>
               </form>
          </div>
      </section>
      <div className="footer-links">
      <div className="footer-link-wrapper">
              <div className="footer-link-items">
                  <h2>Videos</h2>
                  <Link to = '/sign-up'>How it work</Link>
                  <Link to='/'>Testimonials</Link>
                  <Link to = '/'>Careers</Link>
                  <Link to= '/'>Investors</Link>
                  <Link to = '/'>Terms of Services</Link>
              </div>
              <div className="footer-link-items">
                  <h2>Social-media</h2>
                  <Link to = '/sign-up'>How it work</Link>
                  <Link to='/'>Testimonials</Link>
                  <Link to = '/'>Careers</Link>
                  <Link to= '/'>Investors</Link>
                  <Link to = '/'>Terms of Services</Link>
              </div>
            
          </div>
          <div className="footer-link-wrapper">
              <div className="footer-link-items">
                  <h2>About us</h2>
                  <Link to = '/sign-up'>How it work</Link>
                  <Link to='/'>Testimonials</Link>
                  <Link to = '/'>Careers</Link>
                  <Link to= '/'>Investors</Link>
                  <Link to = '/'>Terms of Services</Link>
              </div>
              <div className="footer-link-items">
                  <h2>Contact us</h2>
                  <Link to = '/sign-up'>How it work</Link>
                  <Link to='/'>Testimonials</Link>
                  <Link to = '/'>Careers</Link>
                  <Link to= '/'>Investors</Link>
                  <Link to = '/'>Terms of Services</Link>
              </div>
            
          </div>
     
      </div>
      <section className="social-media">
          <div className="social-media-wrap">
              <div className="foooter-logo">
                  <Link to ='/' className='social-logo'>TRVL  
                   <i className='fab fa-typo3'/>

                   
                  </Link>
              </div>
          </div>
          <small className='website-rights'></small>
          <div className="social-icons">
              <Link className='social-icon-link facebook' to ='/' target='_blank' 
              aria-label='Facebook'
              >
                <a className='add' href="https://www.linkedin.com/in/shantanu-tiwari-2b67b3209">
                <i className='fab fa-facebook'/>
                </a>
                  {/* <i className='fab fa-facebook'/> */}
              
              </Link>
              <Link className='social-icon-link instagram' to ='/' target='_blank' 
              aria-label='Instagram'
              >
                  {/* <i className='fab fa-instagram'/> */}
                  <a className='add' href="https://www.instagram.com/ritikdeepankar/">
                <i className='fab fa-instagram'/>
                </a>
              
              </Link>
              <Link className='social-icon-link linkedin' to ='/' target='_blank' 
              aria-label='LinkedIn'
              >
                <a className='add' href="https://www.linkedin.com/in/shantanu-tiwari-2b67b3209">
                <i className='fab fa-linkedin'/>
                </a>
                  {/* <i className='fab fa-linkedin'/> */}
              
              </Link>
          </div>
      </section>
    </div>
  )
}

export default Footer