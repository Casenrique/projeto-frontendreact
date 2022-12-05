import BagCard from "../../componentes/BagCard/BagCard"
import { priceFormmater } from "../../utils/priceFormatter"
import {    CardsContainer, 
            SpaceshipsCardContainer, 
            BagContainer,
            ContentContainer
         } from "./BagPage.styled"

const BagPage = (props) => {
    const { 
        bag,
        increaseSpaceshipToBag,
        decreaseSpaceshipToBag
    } = props

    const totalPurchase = bag.reduce((acc, spaceship) => {
        return(
        ((spaceship.price * spaceship.quantity) + acc)
        )},
        0
    )

    return(
        <SpaceshipsCardContainer>
                <h1>Carrinho | Total de Compras: {priceFormmater.format(totalPurchase)}</h1> 
                <hr/> 
            <ContentContainer>      
                <CardsContainer>
                    {bag.map((spaceship) => (               
                        <BagCard 
                            spaceship={spaceship} 
                            key={spaceship.id}
                            increaseSpaceshipToBag={increaseSpaceshipToBag}
                            decreaseSpaceshipToBag={decreaseSpaceshipToBag}                 
                        />
                        
                    ))}
                <hr/>
                <BagContainer>
                    <span>Sacola de compras</span>
                </BagContainer>  
                </CardsContainer>
            </ContentContainer>
        </SpaceshipsCardContainer>
    )

}

export default BagPage