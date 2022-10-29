import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Loader from '../layouts/Loader'
import MetaData from '../layouts/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../../actions/cartActions'

const Cart = ({ history }) => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id))
    }

    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1;

        if (newQty > stock) return;

        dispatch(addItemToCart(id, newQty))
    }

    const decreaseQty = (id, quantity) => {
        const newQty = quantity - 1;

        if (newQty <= 0) return;

        dispatch(addItemToCart(id, newQty))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Fragment>
            <MetaData title={'Your Cart'} />
            {cartItems.length === 0 ? <h2 className="mt-5">Your cart is empty</h2> : (
                <Fragment>
                    <h2 className="mt-5">Your cart</h2>

                    {/* the edit starts here */}                    

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">
                            {cartItems.map(item => (
                                <Fragment>   
                                    <hr />
                                    <div className="cart-item" key={item.product}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.image} alt="plant" height="115" width="115" />
                                            </div>
                                            <div className="col-6 col-lg-3 mt-4">
                                                <Link to={`/products/${item.product}`}>{item.name}</Link>
                                                <p id="card_item_price">₱ {item.price}</p>
                                            </div>
                                            
                                            <div className="col-6 col-lg-4 mt-5">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-outline-dark" onClick={() => decreaseQty(item.product, item.quantity)}><i id="decrease_qty" className="fa fa-minus fa-xs" aria-hidden="true"></i></span>
                                                    <input type="number" className="form-control count d-inline" value={item.quantity} />
                                                    <span className="btn btn-outline-dark" onClick={() => increaseQty(item.product, item.quantity, item.stock)}><i id="increase_qty" className="fa fa-plus fa-xs" aria-hidden="true"></i></span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-5">
                                                <i id="delete_cart_item" class="fa fa-trash-o" aria-hidden="true" onClick={() => removeCartItemHandler(item.product)}></i>
                                            </div>

                                        </div>
                                    </div>
                                </Fragment>
                            ))}

                            <hr />
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h3 style={{ letterSpacing: ".1rem" }}>Order summary</h3>
                                <hr />
                                <p style={{ letterSpacing: ".1rem", fontWeight: "bold" }}>Subtotal (<span className="order-summary-values">{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} items)</span></p>
                                <span className="order-summary-values" id="items_subtotal">₱{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</span>
                                <br />
                                <button id="checkout_btn" className="btn-56 btn-primary text-white" onClick={checkoutHandler}>Check out</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Cart
