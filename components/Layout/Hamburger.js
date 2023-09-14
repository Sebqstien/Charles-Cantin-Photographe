import styles from "./Hamburger.module.css"

const Hamburger = ({onClick, expanded}) => (
  <button 
    className={expanded ? styles.Hamburger : styles['Hamburger'] + ' ' + styles['notExpanded'] }
    onClick={onClick}
    >
    <svg id="i-menu" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="3 3 35 35" 
      width="60" 
      height="60" 
      fill="none" 
      stroke="#EEEEEE" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2">
    <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
</svg>
  </button>
)

export default Hamburger