import SearchBar from "../../components/SearchBar/SearckBar"
import spaceships from "../../spaceships/spaceships.json"
import ProductCard from "../../components/ProductCard/ProductCard"
import { SpaceshipsCardContainer, CardsContainer } from "./ProductsPage.styled"

const ProductsPage = (props) => {

    const { //passando para o SearchBar
        nameSearch, 
        setNameSearch, 
        order, 
        setOrder, 
        minPrice, 
        setMinPrice, 
        maxPrice, 
        setMaxPrice, 
        sortingParameter, 
        setSortingParameter,
        addToBag 
    } = props

    return(
        <SpaceshipsCardContainer>
            <SearchBar
                nameSearch={nameSearch}
                setNameSearch={setNameSearch}
                order={order}
                setOrder={setOrder}
                sortingParameter={sortingParameter}
                setSortingParameter={setSortingParameter}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
            />
                <h1>Catálogo de Espaço Naves</h1> 
                <hr/>   
            <CardsContainer>
                {spaceships
                .filter((spaceship) => spaceship.name.toLowerCase().includes(nameSearch.toLowerCase()) || spaceship.movie.toLowerCase().includes(nameSearch.toLowerCase()))
                .filter((spaceship) => spaceship.price >= minPrice || minPrice === "" )
                .filter((spaceship) => spaceship.price <= maxPrice || maxPrice === "" )
                .sort((currentSpaceship, nextSpaceship) => {
                    switch (sortingParameter) {
                        case "movie":
                            return currentSpaceship.movie.localeCompare(nextSpaceship.movie)
                        case "price":
                            return currentSpaceship.price - nextSpaceship.price
                        default:
                            return currentSpaceship.name.localeCompare(nextSpaceship.name)
                }})
                .sort(() => (order === "asc") ? 1 : -1 )
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