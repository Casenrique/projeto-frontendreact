import { SearchBarContainer, Input, Select } from "./SearckBar.styled"

const SearchBar = (props) => {

    const { 
        nameSearch, 
        setNameSearch, 
        order, 
        setOrder, 
        minPrice, 
        setMinPrice, 
        maxPrice, 
        setMaxPrice, 
        sortingParameter, 
        setSortingParameter 
    } = props

    const storeNameSearchData = () => {
        localStorage.setItem()
    }

    return(
        <SearchBarContainer>
            <Input
                type="search"
                placeholder="Escolha seu cruzador"
                value={nameSearch}
                onChange={(e) => setNameSearch(e.target.value)}
            />

            <Input
                type="number"
                placeholder="Valor mínimo"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            <Input
                type="number"
                placeholder="Valor máximo"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
            <label for="sortingParameter" color="white">Ordenar por:</label>
            <Select
                value={sortingParameter}
                onChange={(e) => setSortingParameter(e.target.value)}
            >
                <option value={"name"}>Espaçonave</option>
                <option value={"price"}>Preço</option>
                <option value={"movie"}>Filme</option>
            </Select>  
            <Select
                value={order}
                onChange={(e) => setOrder(e.target.value)}
            >
                {/* <option value="">Ordenar</option> */}
                <option value="asc">Crescente</option>
                <option value="desc">Decrescente</option>
            </Select>  
        </SearchBarContainer>
    )

}

export default SearchBar