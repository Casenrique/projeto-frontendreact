import BagCard from "../../componentes/BagCard/BagCard"
import { CardsContainer, SpaceshipsCardContainer } from "./BagPage.styled"




const BagPage = (props) => {

    const { bag } = props

    return(
        <SpaceshipsCardContainer>
            <CardsContainer>
                <h1>Carrinho</h1> 
                <hr/>   
                {bag.map((spaceship) => (               
                    <BagCard 
                        spaceship={spaceship} 
                        key={spaceship.id}                 
                    />
                    
                ))}
            </CardsContainer>  
        </SpaceshipsCardContainer>
    )

}

export default BagPage