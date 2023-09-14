import Card from "./Card"

import styles from "./Prestations.module.css"

const Prestations = ({content}) => {

  const {attributes: {titre, corps, cartes}} = content

  return (
    <div className={styles.Prestations}>
      <div className={styles.titleContainer}>
        <h1>{titre}</h1>
        <p>{corps}</p>
      </div>
      <div className={styles.cardsContainer}>
        {cartes.map((carte) => (
        <Card key={Math.random()} carte={carte} /> 
        ))}
     </div>
    </div>
  )
}

export default Prestations