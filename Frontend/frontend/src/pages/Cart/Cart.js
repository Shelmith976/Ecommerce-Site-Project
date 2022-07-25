import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
const Cart = () => {
    const cart= useSelector((state) => state);
    console.log(cart.cart);
    const dispatch = useDispatch();
    const addition = (acc, currentvalue) => {
        return acc + currentvalue.price * currentvalue.quantity;
      };
    const total = cart.cart.reduce(addition, 0);

    return(
        <div className="container-fluid py-3">
            <div className="row justify-content-center">
                <h4 className="row py-3 justify-content-center text-decoration-underline">My Cart</h4>
                <div>
                    <table className="table table-light table-hover m-o">
                        <tbody>
                            {cart.cart.map((product)=> {Object.assign({},product)
                                
                                return (
                                    <tr key={product.productId} className="align-middle">
                                        <td><img src={product.productImage} alt="" /></td>
                                        <td>{product.productName}</td>
                                        <td>{product.price}</td>
                                        <td><p>Amount : ksh.{product.price * product.quantity}</p></td>
                                        <td>
                                            <button className="btn btn-outline-dark mx-1" onClick={() => dispatch({ type: "INCREASE", payload: product })}>+</button>
                                            <button className="btn btn-outline-dark mx-1" onClick={() => {
                                                if (product.quantity > 1) {
                                                dispatch({ type: "DECREASE", payload: product });
                                                } else {
                                                dispatch({ type: "REMOVE", payload: product });
                                                }
                                            }}>-</button>
                                            <button className="btn btn-outline-danger mx-1" onClick={() => dispatch({ type: "REMOVE", payload: product })}>Remove</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>Total Price:{total > 0 && <h5>{total}</h5>}</h5>
                    <button className="btn btn-outline-dark">Place Order</button>
                </div>
            </div>
        </div>
    )
}
export default Cart
        
          