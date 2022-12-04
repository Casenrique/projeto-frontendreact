import {HeaderContainer, Input, Button, ShopName, Image } from "./Header.styled"
import rocketIcon from "../../assets/launchpad.svg"
import homeIcon from "../../assets/home-button.svg"
import bagIcon from "../../assets/cart.svg"



const Header = (props) => {

    const { goToProductsPage, goToBagPage, nameSearch, setNameSearch, order, setOrder, sortingParameter, setSortingParameter } = props

     return (
        <HeaderContainer>
            <Button>
                <Image src={rocketIcon} alt="Rocket Icon" />
            </Button>
            <ShopName>
                <a href="/">
                    Spaceships Shop
                </a>
            </ShopName>
            <Button onClick={goToProductsPage}>
                <Image src={homeIcon} alt="Home Icon" />
            </Button>

            <Input
            placeholder="Digite o nome da espaço nave desejada"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            />
                 
            <Button onClick={goToBagPage}>
                <Image src={bagIcon} alt="Bag    Icon" />
            </Button>
        </HeaderContainer>
     )
};

export default Header;