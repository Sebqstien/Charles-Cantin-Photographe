import ReactMarkdown from 'react-markdown'

import styles from "./Card.module.css"

const Card = ({carte}) => {

  const {titre, corps, prix, src} = carte

  return (
    <div className={styles.Card}>
      <div className={styles.cardHeader}>
        <div 
        className={styles.cardBackground}
        style={{backgroundImage: `url(${src})`}}
        /> 
        <h2>{titre}</h2>
      </div>
      <div className={styles.cardBody}>
        <ReactMarkdown>{corps}</ReactMarkdown>
        <div className={styles.price}>{prix && prix + '€'}</div>
      </div>
      
    </div>
  )
}

export default Card