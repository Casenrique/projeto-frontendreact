import { CardContainer, ProductPhoto, ProductName, ProductMovie, AddToBagButton, ProductPrice } from "./BagCard.styled"
import addToBagIcon from "../../assets/add-to-cart.svg"

const priceFormmater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  


const BagCard = (props) => {
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

export default BagCard