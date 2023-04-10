import React from 'react'
import logo from '../../assets/images/res-logo.png'
import { NavLink , Link } from 'react-router-dom'
import { useRef } from 'react'
const Header = () => {

    const nav_link = [
        {
            display : 'Home',
            path : '/home'
        },
        {
            display : 'Foods',
            path : '/foods'
        },
        {
            display : 'Cart',
            path : '/cart'
        },
        {
            display : 'Contact',
            path : '/contact'
        },
    ]

    const menuRight = useRef(null);
    const menuToggle = () => menuRight.current.classList.toggle('active')
  return (
    <header className='header'>
        <div className="logo">
            <img src={logo} alt="logo"></img>
            <h3>Tasty Treat</h3>
        </div>

        <div className="navigation">
            <div className="menu" ref={menuRight}>
                {nav_link.map((item,index) => (
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_menu' : '' } onClick={menuToggle}>
                        {item.display}
                    </NavLink>
                ))}
                <div className="menu_icon_close" onClick={menuToggle}>
                    <i class="ri-close-line"></i>
                </div>               
            </div>
        </div>

        <div className="nav_icon">
            <span className="nav_icon_cart">
                <i class="ri-shopping-cart-2-line"></i>
            </span>

            <span className="nav_icon_user">
                <Link to='/login'>
                    <i class="ri-user-3-line"></i>
                </Link>
            </span>

            <span className="nav_icon_mobile_menu" onClick={menuToggle}>
                <i class="ri-menu-line"></i>
            </span>
        </div>
    </header>
  )
}

export default Header