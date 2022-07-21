import './Cart.css';
import {useCart} from  'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    if(isEmpty) return <h5 className="text-center py-5">Cart is empty</h5>
    return(
        <div className="container-fluid py-3">
            <div className="row">
                <h4 className="container-fluid py-3 text-decoration-underline">My Cart</h4>
                <div className="col-12"></div>
            </div>
        </div>
    )
}
export default Cart
