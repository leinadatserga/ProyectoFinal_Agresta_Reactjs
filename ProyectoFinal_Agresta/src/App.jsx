import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { bienvenida, categoria } from "./components/Variables";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import CartContextProvider from "./components/context/CartContextProvider";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Congrats from "./components/Congrats";

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={ "/" } element={ <ItemListContainer greeting={ bienvenida } /> } />
            <Route path={ "/category/:categoryId" } element={ <ItemListContainer greeting={ categoria } /> } />
            <Route path={ "/item/:id" } element={ <ItemDetailContainer /> } />
            <Route path={ "/cart" } element={ <Cart /> } />
            <Route path={ "/checkout" } element={ <Checkout /> } />
            <Route path={ "/congrats/:id" } element={ <Congrats /> } />
            <Route path={ "*" } element={ <Error404 /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
};

export default App;
