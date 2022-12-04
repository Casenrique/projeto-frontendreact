import { SearchBarContainer, Input, Select } from "./SearckBar.styled"

const SearchBar = () => {

    return(
        <SearchBarContainer>
            <Input
                placeholder="Valor mínimo"
                label="Valor mínimo"
            />
            <Input
                placeholder="Valor máximo"
                label="Valor máximo"
            />
            <Select>
                <option>Nome</option>
                <option>Valor</option>
            </Select>  
            <Select>
                <option>Ordenar</option>
                <option>Crescente</option>
                <option>Decescente</option>
            </Select>  
        </SearchBarContainer>
    )

}

export default SearchBar