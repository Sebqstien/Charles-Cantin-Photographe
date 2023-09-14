import CategoryButton from "./CategoryButton"

import styles from "./Categories.module.css"

const Categories = ({ handleCategories, handleReset}) => {

return (
  <div >
    <CategoryButton onClick={handleCategories} value="mariage">Mariage</CategoryButton>
    <CategoryButton onClick={handleCategories} value="grossesse">Grossesse</CategoryButton>
    <CategoryButton onClick={handleCategories} value="bebe">Bébé</CategoryButton>
    <CategoryButton onClick={handleCategories} value="bapteme">Baptême</CategoryButton>
    <CategoryButton onClick={handleCategories} value="famille">Famille</CategoryButton>
    <CategoryButton onClick={handleCategories} value="portrait">Portrait</CategoryButton>
    <CategoryButton onClick={handleReset}>Toutes</CategoryButton> 
  </div>
)}

export default Categories