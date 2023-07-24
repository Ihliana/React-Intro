import React from 'react'
import './App.css';

import Logo from "./images/react-logo.png"


/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header(){
  return(
    <header>
      <nav>
          <img src={Logo} width="40px" alt='React Logo' />
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
