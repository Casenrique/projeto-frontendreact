import {HeaderContainer, Input, Button, ShopLogo, Image } from "./Header.styled"
import rocketIcon from "../../assets/rocket-ship.png"
import homeIcon from "../../assets/home-button.svg"
import bagIcon from "../../assets/cart.svg"
import logo from "../../assets/logo.png"



const Header = (props) => {

    const { goToProductsPage, goToBagPage, nameSearch, setNameSearch, order, setOrder, sortingParameter, setSortingParameter } = props

     return (
        <HeaderContainer>
            <Button>
                <Image src={rocketIcon} alt="Rocket Icon" />
            </Button>            
                <a href="/">
                    <ShopLogo src={logo} alt=""/>
                </a>            
            <Button onClick={goToProductsPage}>
                <Image src={homeIcon} alt="Home Icon" />
            </Button>

            {/* <Input
            placeholder="Escolha sua nave"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            /> */}
                 
            <Button onClick={goToBagPage}>
                <Image src={bagIcon} alt="Bag Icon" />
            </Button>
        </HeaderContainer>
     )
};

export default Header;