import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Check from '../Icons/Check'
import RightArrow from '../Icons/RightArrow'
import Spelling from '../Icons/Spelling'
import LeftArrows from '../Icons/LeftArrows'
import Mic from '../Icons/Mic' 
import Text from '../Icons/Text' 
import Pdf from '../Icons/Pdf' 
import Burger from '../Icons/Burger'  
import CloseIcon from '../Icons/CloseIcon'  
import logo from '../../assets/img/logo.png'

const Header = ({activeSide, setActiveSide}) => { 
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <header className={`header ${activeSide ? 'header-sm' : '' } ${activeBurger ? 'active-burger' : ''}`}>
      <div className="side-bar-arrow">
        <div className="side-b-a" onClick={()=> {setActiveSide(!activeSide)}}>
          <LeftArrows />
        </div>
      </div>
     <div className="logo-menu">
        <div className='logo'> 
        {
          activeSide ? 
          (
            <Link to={'/'}><img src='/logo.svg' alt="logo" /></Link>

          ) : (
            <Link to={'/'}><img src={logo} alt="logo" /> </Link>
          )
        }  
        </div>
         {/* burger menu */}
          <div className='burger-menu'>
            {
              activeBurger ? (
                <div className="closeBurgerIcon" onClick={() => {setActiveBurger(false)}}>
                  <CloseIcon />
                </div>
              )
              :
              (
                <div className="burgerIcon" onClick={() => {setActiveBurger(true)}}>
                  <Burger />
                </div>
              )
            } 
          </div>
      {/* burger menu */}
     </div>
      <nav className='nav'>
        <ul>
          <li className='nav-item'>
            <NavLink to="/home" className={'nav-link'}>
              <div className="radius-1"></div>
              <div className="radius-2"></div> 
              <div className="icon">
                <Check />
              </div>
               <div className='nav-link-text'>
                <span>მარლთმწერი</span> 
              </div>
            </NavLink>
          </li>
            <li  className='nav-item'> 
              <NavLink to="/text" className={'nav-link'}>
              <div className="radius-1"></div>
              <div className="radius-2"></div> 
              <div className="icon">
                <Spelling />
              </div>
               <div className='nav-link-text'> 
                <span>ტექსტის შედარება</span>
              </div>
            </NavLink>
          </li>
            <li   className='nav-item'> 
              <NavLink to="/voicetext" className={'nav-link'}>
              <div className="radius-1"></div>
              <div className="radius-2"></div> 
              <div className="icon">
                <Mic />
              </div>
              <div className='nav-link-text'>
                <span>ხმა</span>
                <div className='icon-2'>
                  <RightArrow />
                </div>
                <span>ტექსტი</span>
              </div>
            </NavLink>
          </li>
            <li   className='nav-item'> 
              <NavLink to="/textvoice" className={'nav-link'}>
              <div className="radius-1"></div>
              <div className="radius-2"></div> 
              <div className="icon">
                <Text />
              </div>
              <div className='nav-link-text'>
                <span>ტექსტი</span>
                <div className='icon-2'>
                  <RightArrow />
                </div>
                <span>ხმა</span>
              </div>
            </NavLink>
          </li>
           <li   className='nav-item'> 
              <NavLink to="/pdf" className={'nav-link'}>
              <div className="radius-1"></div>
              <div className="radius-2"></div> 
              <div className="icon">
                <Pdf />
              </div>
              <div className='nav-link-text'>
                <span>PDF</span> 
                <span>კონვერტაცია</span>
              </div>
            </NavLink>
          </li>
        </ul> 
      </nav> 
      <div className="user">    
        <div className='user-info'>
          <div className="us-img">
             <img src="/logo.svg" alt="user" />
          </div>
          <p>მომხმარებელი</p>
        </div>
        <div className="dots">...</div>
      </div>
    </header>
  )
}

export default Header