import { useState } from "react"

import styles from "./CategoryButton.module.css"

const CategoryButton = ({children, value, onClick}) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (event) => {
    onClick(event)
    setIsActive(!isActive)
  }

  return (
    <button className={styles.CategoryButton + ' ' + (isActive ? styles.active : "")} onClick={event => handleClick(event)} value={value}>{children}</button>
  )

}

export default CategoryButton