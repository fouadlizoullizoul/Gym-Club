import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import './Header.css'
import {Link} from 'react-scroll'
export default function Header() {
  const [menuoppend,setmenuoppend]=useState(false)
  return (
    <div className='header' id='Home'>
      <img  src={logo} alt='' className='logo'/>
      {menuoppend === false ? (
        <div onClick={()=> setmenuoppend(true)}>
          
          <img style={{width:'1.9rem' , height:'1.2rem' ,paddingTop:'10px'}} src={Bars} alt="" />
        </div>
      ) : (
         <ul className='header-menu' >
        <li>
          <Link activeClass='active' span={true} to='Home' smooth='true' onClick={()=> setmenuoppend(false)}> 
          Home
          </Link>
        </li>
        <li>
          <Link span={true} smooth='true smooth='true onClick={()=> setmenuoppend(false)}
          to='Program'
          >
          Programs
          </Link>
          </li>
        <li>
        <Link  span={true} smooth='true'  to='Why-Us' onClick={()=> setmenuoppend(false)}>
          Why Us
        </Link>
        </li>
        <li>
          <Link span={true}  smooth='true' onClick={()=> setmenuoppend(false)}
          to='Plans'
          >Plans</Link>
        </li>
        <li>
          <Link span={true}   smooth='true'  onClick={()=> setmenuoppend(false)}    
          to='Testimonials'
          >
          Testimonials</Link>
          </li>
      </ul>
      )} 
     
    </div>
  )
}
