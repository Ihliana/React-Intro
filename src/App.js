import React from 'react'
import './App.css';

import Logo from "./images/react-logo.png"

function App() {

  let year = new Date().getFullYear()
  return (
    <div>

      <header>
        <nav>
            <img src={Logo} width="40px" alt='React Logo' />
        </nav>
      </header>

      <h1>Fun facts about React</h1>

      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>

      <footer>
        <small>@ {year} Scrimba</small>
      </footer>

    </div>
  );
}

export default App;
