import { useContext } from "react";
import { CartContext } from "./context/CartContextProvider";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalCart } = useContext( CartContext );
    return(
        <div className="cart-widget">
            <Link to = { "/cart" }>
            {(( totalCart () !== 0 ) ? <button className="cantidad" >{ totalCart () }</button> : <button className="cantidad" ></button> )}
            </Link>
        </div>
    )
};

export default CartWidget;