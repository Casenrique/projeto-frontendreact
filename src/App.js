import { GlobalStyled } from "./GlobalStyled"
import { useState } from "react"
import Header from "./components/Header/Header"
import BagPage from "./pages/BagPage/BagPage"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import { useEffect } from "react"

function App() {
  
  const [currentPage, setCurrentPage] = useState("ProductsPage")
  const [bag, setBag] = useState([])
  const [nameSearch, setNameSearch] = useState("")
  const [order, setOrder] = useState("")
  const [sortingParameter, setSortingParameter] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  
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
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          />
      case "BagPage":
        return <BagPage
          bag={bag}
          increaseSpaceshipToBag={increaseSpaceshipToBag}
          decreaseSpaceshipToBag={decreaseSpaceshipToBag}
          removeFromBag={removeFromBag}
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
      window.alert("Espaçonave adicionada à sacola!")
    } else {
      spaceshipSearch.quantity++
    }


    const bagStringify = JSON.stringify(newBag)
    window.localStorage.setItem("compras", bagStringify)

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

  const removeFromBag = (spaceshipToRemove) => {
    const newBag = [...bag]    
    const searchIndex = newBag.findIndex(
      (spaceshipInBag) => spaceshipInBag.id === spaceshipToRemove.id
    )
    newBag.splice(searchIndex, 1)
    const bagStringify = JSON.stringify(newBag)
    window.localStorage.setItem("compras", bagStringify)
    setBag(newBag)
  }

  const saveBag = () => {
    if(window.localStorage.getItem("compras")) {
    const getBag = window.localStorage.getItem("compras")
    const arrayBag = JSON.parse(getBag)
    setBag(arrayBag)
    }
  }
  
  useEffect(() => {
    saveBag()
  }, [])

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
        spaceshipsInBag={bag.length}
      />
      {renderPage()}
      
      
    </>
  )
}

export default App
 