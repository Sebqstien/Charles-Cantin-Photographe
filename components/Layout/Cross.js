import styles from "./Cross.module.css"

const Cross = ({onClick, expanded}) => (
  <button 
    className={!expanded ? styles['Cross'] + ' ' + styles['expanded'] : styles.Cross}
    onClick={onClick}
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 35 35" 
      width="50" 
      height="50" 
      fill="none" 
      stroke="currentcolor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2">
    <path d="M2 30 L30 2 M30 30 L2 2" />
  </svg>
  </button>

)

export default Cross