
import React, { useState } from "react";

import Menu from "./Menu"
import Socials from "./Socials"
import Hamburger from "./Hamburger"
import styles from "./Header.module.css"



const Header = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  function handleClick() {
    setIsMenuExpanded(!isMenuExpanded)
  }
  return (
  <div className={styles.Header}>
    <a href="/">
      <img className={styles.Logo} src="assets/logo-transparent.png" alt="logo"/>
    </a> 
    <Hamburger 
      onClick ={handleClick}
      expanded={isMenuExpanded}/>   
    <Menu 
      onClick={handleClick}
      expanded={isMenuExpanded}/>      
    <Socials/>
    <div 
      className={isMenuExpanded ? styles["blur"] + ' ' + styles["expanded"] : styles.blur}
      onClick={handleClick}
    /> 
  </div>
  )
}

export default Header