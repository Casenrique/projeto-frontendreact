import { GlobalStyled } from "./GlobalStyled";
import { useState } from "react";
import Header from "./componentes/Header/Header";
import BagPage from "./pages/BagPage/BagPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage"


function App() {
  
  const [currentPage, setCurrentPage] = useState("ProductsPage")
  const [ bag, setBag ] = useState([])

  const [nameSearch, setNameSearch] = useState("");
  const [order, setOrder] = useState("");
  const [sortingParameter, setSortingParameter] = useState("");
  
  const goToProductsPage = () => setCurrentPage("ProductsPage")
  const goToBagPage = () => setCurrentPage("BagPage")
  
  const renderPage = () => {
    switch (currentPage) {
      case "ProductsPage":
        return <ProductsPage
          nameSearch={nameSearch}
          setNameSearch={setNameSearch}
          order={order}
          setOrder={setOrder}
          sortingParameter={sortingParameter}
          setSortingParameter={setSortingParameter}
          addToBag={addToBag}
          />
      case "BagPage":
        return <BagPage
          bag={bag}
          increaseSpaceshipToBag={increaseSpaceshipToBag}
          decreaseSpaceshipToBag={decreaseSpaceshipToBag}
        />
      default:
        return <ErrorPage/>
    }
  }  

  const addToBag = (spaceshipToAdd) => {
    
    const newBag = [...bag]
    
    const spaceshipSearch = newBag.find(
        (spaceshipInBag) => spaceshipInBag.id === spaceshipToAdd.id
    )
    if (!spaceshipSearch) {
      const newSpaceship = {...spaceshipToAdd, quantity: 1}
      newBag.push(newSpaceship)
    } else {
      spaceshipSearch.quantity++
    }

    setBag(newBag)
  }

  const increaseSpaceshipToBag = (spaceshipToIncrease) => {
    
    const newBag = [...bag]
    
    const spaceshipSearch = newBag.find(
        (spaceshipInBag) => spaceshipInBag.id === spaceshipToIncrease.id
    )

    spaceshipSearch.quantity++
    
    setBag(newBag)
  }

  const decreaseSpaceshipToBag = (spaceshipToDecrease) => {
    
    const newBag = [...bag]
    
    const spaceshipSearch = newBag.find(
        (spaceshipInBag) => spaceshipInBag.id === spaceshipToDecrease.id
    )

    spaceshipSearch.quantity--

    
    setBag(newBag)
  }



  return (
    <>
      <GlobalStyled />
      <Header
        goToProductsPage={goToProductsPage}
        goToBagPage={goToBagPage}
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        order={order}
        setOrder={setOrder}
        sortingParameter={sortingParameter}
        setSortingParameter={setSortingParameter}
        spaceshipsInCBag={bag.length}
      />
      {renderPage()}
      
      
    </>
  );
}

export default App;
 