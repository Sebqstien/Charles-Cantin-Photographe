
import styles from "./Home.module.css"

const Home = () => (
  <div className={styles.Home}>
    <div className={styles.background}/>
    <img 
      className={styles.logo}
      src="/assets/Logo-transparent.png" 
      alt="logo"/>
  </div>
)

export default Home