import { 
        CardContainer, 
        ProductPhoto, 
        ProductName, 
        ProductMovie, 
        ProductPrice, 
        ProductQuantity, 
        ProductData,
        AddSubtractButton,
        RemoveButton,
        ButtonsSection 
    } from "./BagCard.styled"

const priceFormmater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  


const BagCard = (props) => {
    const { 
        spaceship, 
        increaseSpaceshipToBag,
        decreaseSpaceshipToBag,
        removeFromBag
    } = props
    
    return(
        <CardContainer>
            <ProductPhoto src={spaceship.imageUrl} alt={spaceship.name} />
            <ProductData>
                <ProductName>{spaceship.name}</ProductName>
                <ProductMovie>{spaceship.movie}</ProductMovie>
                <ProductPrice>{priceFormmater.format(spaceship.price)}</ProductPrice>
                <ButtonsSection>
                    {spaceship.quantity > 1 && <AddSubtractButton onClick={() => decreaseSpaceshipToBag(spaceship)}>-</AddSubtractButton>}
                    <ProductQuantity>Quantidade: {spaceship.quantity}</ProductQuantity>
                    <AddSubtractButton onClick={() => increaseSpaceshipToBag(spaceship)}>+</AddSubtractButton>
                </ButtonsSection>
                <RemoveButton onClick={() => removeFromBag(spaceship)}>Remover</RemoveButton>
            </ProductData>  
        </CardContainer>
    )
}

export default BagCard