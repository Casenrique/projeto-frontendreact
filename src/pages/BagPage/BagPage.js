import BagCard from "../../componentes/BagCard/BagCard"
import { priceFormmater } from "../../utils/priceFormatter"
import {    CardsContainer, 
            SpaceshipsCardContainer, 
            BagContainer,
            ContentContainer,
            BagSummaryTitle
         } from "./BagPage.styled"

const BagPage = (props) => {
    const { 
        bag,
        increaseSpaceshipToBag,
        decreaseSpaceshipToBag,
        removeFromBag,
        spaceshipsInBag
    } = props

    const totalPurchase = bag.reduce((acc, spaceship) => {
        return(
        ((spaceship.price * spaceship.quantity) + acc)
        )},
        0
    )

    const totalItemsPurchase = bag.reduce((acc, spaceship) => {
        return(
        ((spaceship.quantity) + acc)
        )},
        0
    )

    console.log(totalItemsPurchase)

    return(
        <SpaceshipsCardContainer>
                <h1>RESUMO DE COMPRAS</h1> 
                <hr/> 
            <ContentContainer>      
                <CardsContainer>
                    {bag.map((spaceship) => (               
                        <BagCard 
                            spaceship={spaceship} 
                            key={spaceship.id}
                            increaseSpaceshipToBag={increaseSpaceshipToBag}
                            decreaseSpaceshipToBag={decreaseSpaceshipToBag}
                            removeFromBag={removeFromBag}
                            spaceshipsInBag={spaceshipsInBag}                 
                        />
                        
                    ))}
                </CardsContainer>
                <BagContainer>
                    <BagSummaryTitle>Sacola de compras</BagSummaryTitle>
                    <hr/>
                    <CardsContainer>
                        <h1>Total de Naves: {totalItemsPurchase}</h1> 
                        <h1>Custo Total: {priceFormmater.format(totalPurchase)}</h1> 
                        {/* {bag.map((spaceship)=> (
                            <img 
                                key={spaceship.id} 
                                src={spaceship.image.Url} 
                                alt={spaceship.name} 
                            />
                        ))} */}
                    </CardsContainer>
                </BagContainer>  
            </ContentContainer>
        </SpaceshipsCardContainer>
    )

}

export default BagPage