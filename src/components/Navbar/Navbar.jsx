import React, { useRef, useState } from 'react'
import './Navbar.css'
import Obiri_clear from '../../assets/Obiri_clear.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home")
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0"; 
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px"; 
  }

  return (
    <div className='navbar'>
      <img src={Obiri_clear} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav_mob_close" />
      <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src="" alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About us</p></AnchorLink>{menu==="about"?<img src="" alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Destinations</p></AnchorLink>{menu==="services"?<img src="" alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Reviews</p></AnchorLink>{menu==="work"?<img src="" alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact us</p></AnchorLink>{menu==="contact"?<img src="" alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Let's Tour</p></AnchorLink></div>
    </div>
  )
}

export default Navbar
