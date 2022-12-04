import SearchBar from "../../componentes/SearchBar/SearckBar"
import spaceships from "../../spaceships/spaceships.json"
import ProductCard from "../../componentes/ProductCard/ProductCard"
import { SpaceshipsCardContainer, CardsContainer } from "./ProductsPage.styled"

const ProductsPage = (props) => {

    const { nameSearch, setNameSearch, order, setOrder, sortingParameter, setSortingParameter, addToBag } = props

    return(
        <SpaceshipsCardContainer>
            <SearchBar
                setNameSearch={setNameSearch}
                order={order}
                setOrder={setOrder}
                sortingParameter={sortingParameter}
                setSortingParameter={setSortingParameter}
            />
                <h1>ProductPage</h1> 
                <hr/>   
            <CardsContainer>
                {spaceships
                .filter((spaceship) => spaceship.name.toLowerCase().includes(nameSearch.toLowerCase()))
                // .filter((spaceship) => spaceship.price)
                .map((spaceship) => (               
                    <ProductCard 
                        spaceship={spaceship} 
                        key={spaceship.id} 
                        addToBag={addToBag}                
                    />
                    
                ))}
            </CardsContainer>  
        </SpaceshipsCardContainer>
    )
}

export default ProductsPage