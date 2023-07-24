import React from "react"
import Logo from "../images/react-logo.png"

function Header(){
    return(
      <header>
        <nav className='nav'>
            <img src={Logo} className='nav--icon' alt='React Logo' />
  
            <h3 className="nav--logo-text">React Facts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    </header>
    )
  }


  export default Header