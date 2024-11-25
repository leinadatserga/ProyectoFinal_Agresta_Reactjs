import Item from "./Item";

const ItemList = ({ product }) => {
    return(
        <>
            { product.map ( item => <Item key={ item.id } item = { item } />)}
        </>
    )
};

export default ItemList;