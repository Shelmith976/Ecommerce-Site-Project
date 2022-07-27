import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
  } from "../../components/features/Reducer.js";
const Cart = () => {
    const cart= useSelector((state) => state.cart);
    console.log(cart.cartItems);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);
    
      const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };
      const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
      };
      const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
      };
      const handleClearCart = () => {
        dispatch(clearCart());
      };
    return (
        <div className="cart-container">
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
        
      ) : (
        <div className="container-fluid py-3">
            <div className="row justify-content-center">
                <h4 className="row py-3 justify-content-center text-decoration-underline">My Cart</h4>
                <div>
                    <table className="table table-light table-hover m-o">
                        <tbody>
                            {cart.cartItems.map((product)=> {
                                
                                return (
                                    <tr key={product.productId} className="align-middle">
                                        <td><img src={product.productImage} alt="" /></td>
                                        <td>{product.productName}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <div className="d-flex">
                                            <button className="btn btn-outline-dark mx-1" onClick={() => handleAddToCart(product)}>+</button>
                                            <div className="count">{product.cartQuantity}</div>
                                            <button className="btn btn-outline-dark mx-1 me-5" onClick={() => handleDecreaseCart(product)}>-</button>
                                            <button className="btn btn-outline-danger mx-1" onClick={() => handleRemoveFromCart(product)}>Remove</button>
                                            </div>
                                        </td>
                                        <td>
                                          
                                            <p>Total Price:{product.price*product.cartQuantity}</p>
                                          
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>    
                </div>
                <div className="d-flex justify-content-end py-3">
                <button className="btn btn-outline-danger" onClick={() => handleClearCart()}>Remove all</button>
                </div>
                <div className="d-flex justify-content-between py-3">
                  <div>
                    <span>Total Amount:</span>
                    <span>Ksh.{cart.cartTotalAmount}</span>
                  </div>
                  <div>
                    <button className="btn btn-outline-dark">Place order</button>
                  </div>
                </div>
                
              </div>
              <div className="continue-shopping">
                <Link to="/home">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
        </div>
    )
    }
    
    
    </div>
    )
}
export default Cart

          