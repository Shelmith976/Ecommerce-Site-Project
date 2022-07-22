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
            <div className="row justify-content-center">
                <h4 className="container-fluid py-3 text-decoration-underline">My Cart</h4>
                <div>
                    <table className="table table-light table-hover m-o">
                        <tbody>
                            {items.map((item,index)=>{
                                return(
                                    <tr key={index} className="align-middle">
                                        <td><img src={item.image} className="img-cart" alt="" /></td>
                                        <td>{item.title}</td>
                                        <td>Ksh.{item.price}</td>
                                        <td>Quantity:{item.quantity}</td>
                                        <td>
                                            <button onClick={()=>updateItemQuantity(item.id,item.quantity - 1)} className="btn btn-outline-dark mx-1">-</button>
                                            <button onClick={()=>updateItemQuantity(item.id,item.quantity + 1)} className="btn btn-outline-dark mx-1">+</button>
                                            <button onClick={()=>removeItem(item.id)} className="btn btn-outline-danger mx-1">Remove Item</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-between py-3">
                <button onClick={()=>emptyCart()} className="btn btn-outline-danger ">Remove All</button>
                <h3>Total Price:Ksh.{cartTotal}</h3>
            </div>
            </div>
        </div>
    )
}
export default Cart
