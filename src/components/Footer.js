import React from "react"

function Footer(){
    let year = new Date().getFullYear()
  
    return(
      <footer>
        <small>@ {year} Scrimba</small>
    </footer>
  
    )
  }


  export default Footer
  