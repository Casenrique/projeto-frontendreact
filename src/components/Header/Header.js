import {HeaderContainer, Button, ShopLogo, Image, LogoContainer, IconsContainer, Badge, HeaderList, ItemList } from "./Header.styled"
// import rocketIcon from "../../assets/rocket-ship.png"
import homeIcon from "../../assets/home-button.svg"
import bagIcon from "../../assets/cart.svg"
import logo from "../../assets/logo.png"



const Header = (props) => {

    const { goToProductsPage, goToBagPage, spaceshipsInBag } = props
    const headerItems = ["SOBRE NÓS", "CONTATOS IMEDIATOS", "SEJA DA TRIPULAÇÃO" ]

     return (
        <HeaderContainer>
            <LogoContainer>
                {/* <Button>
                    <Image src={rocketIcon} alt="Rocket Icon" />
                </Button>             */}
                <a href="/">
                    <ShopLogo src={logo} alt=""/>
                </a>
            </LogoContainer>
            <HeaderList>{headerItems.map((item => <ItemList>{item}</ItemList>))}</HeaderList>
            <IconsContainer>            
                <Button onClick={goToProductsPage}>
                    <Image src={homeIcon} alt="Home Icon" />
                </Button>                          
                <Button onClick={goToBagPage}>
                    <Image src={bagIcon} alt="Bag Icon" />
                    <Badge>{spaceshipsInBag}</Badge>
                </Button>
            </IconsContainer>
        </HeaderContainer>
     )
}

export default Header;