import { useRouter } from "next/router"
import Link from "next/link.js";

import Cross from './Cross.js'

import styles from "./Menu.module.css"


const Menu = ({ onClick, expanded }) => {
  const router = useRouter()

  return (  
    <nav className={expanded ? styles["Menu"] + ' ' + styles["expanded"] : styles.Menu}>
      <Cross       
        onClick={onClick}
      />  
      <ul>
        {//Only displays link to Home when not on Home
          router.asPath !== "/" && 
          <li>
            <Link href="/">
              <a>ACCUEIL</a>
            </Link>
          </li>
        }        
        <li>
          <Link href="/galerie">
            <a>GALERIE</a>
          </Link>
        </li>
        <li>
          <Link href="/prestations">
            <a>PRESTATIONS</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </li>
      </ul>
    </nav>
  )}
;

export default Menu;