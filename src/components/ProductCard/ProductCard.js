import { CardContainer, ProductPhoto, ProductName, ProductMovie, AddToBagButton, ProductPrice } from "./ProductCard.styled"
import addToBagIcon from "../../assets/add-to-cart.svg"
import { priceFormmater } from "../../utils/priceFormatter";

const ProductCard = (props) => {
    const { spaceship, addToBag } = props
    console.log(spaceship)
    
    return(
        <CardContainer>
            <ProductPhoto src={spaceship.imageUrl} alt={spaceship.name} />
            <ProductName>{spaceship.name}</ProductName>
            <ProductMovie>{spaceship.movie}</ProductMovie>
            <ProductPrice>{priceFormmater.format(spaceship.price)}</ProductPrice>
            <AddToBagButton onClick={() => addToBag(spaceship)}>
                <img src={addToBagIcon} alt="Add to bag icon"/>
            </AddToBagButton>
        </CardContainer>
    )
}

export default ProductCard