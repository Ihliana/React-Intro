import React from 'react'
import './App.css';

import Logo from "./images/react-logo.png"


/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
  - Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.

  - Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

function Header(){
  return(
    <header>
      <nav className='nav'>
          <img src={Logo} className='nav-logo' alt='React Logo' />

          <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
  </header>
  )
}

function Footer(){
  let year = new Date().getFullYear()

  return(
    <footer>
      <small>@ {year} Scrimba</small>
  </footer>

  )
}


function MainContent(){
  return(
      <>
        <h1>Fun facts about React</h1>

        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </>
  )
}

function App() {

  return (
    <div>

      <Header />

      <MainContent />  

      <Footer />

    </div>
  );
}

export default App;
