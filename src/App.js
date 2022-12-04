import { GlobalStyled } from "./GlobalStyled";
import { useState } from "react";
import Header from "./componentes/Header/Header";
import BagPage from "./pages/BagPage/BagPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage"


function App() {
  
  const [currentPage, setCurrentPage] = useState("ProdutsPage")
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
 