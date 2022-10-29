import React, { Fragment, useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

import Loader from '../layouts/Loader'
import MetaData from '../layouts/MetaData'

import { useAlert } from 'react-alert'
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import { addItemToCart } from '../../actions/cartActions'

const ProductDetails = ({ match }) => {

    // const { id } = useParams();

    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, product } = useSelector(state => state.productDetails)

    // const getProductDetailsState = useSelector(state => state.productDetails)
    // const { loading, error, product } = getProductDetailsState

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, match.params.id])

    const addToCart = () => {
        dispatch (addItemToCart(match.params.id, quantity));
        alert.success('Item added to your cart.')
    }

    const increaseQty = () => {
        const count = document.querySelector('.count')

        if (count.valueAsNumber >= product.stock) return;

        const qty = count.valueAsNumber + 1;
        setQuantity(qty)
    }

    const decreaseQty = () => {
        const count = document.querySelector('.count')

        if (count.valueAsNumber <= 1) return;

        const qty = count.valueAsNumber - 1;
        setQuantity(qty)
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={product.name} />
                    <div className="container container-fluid">
                        <div className="row f-flex justify-content-around">
                            <div className="col-md-6 col-lg-5">
                                <div className="card border-0 p-3 m-2">
                                    <Carousel>
                                        {product.images && product.images.map(image => (
                                            <Carousel.Item key={image.public_id}>
                                                <img className="d-block w-100" src={image.url} alt={product.title}></img>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="p-3" style={{ textAlign: "left", letterSpacing: ".1rem" }}>
                                    <h1>{product.name}</h1>
                                    <h6>{product.category}</h6>


                                    <div className="rating-outer">
                                        <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                                    </div>


                                    <br />
                                    <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
                                    <br />
                                    <br /><strong></strong>
                                    <h4 style={{ fontFamily: "Urbanist, sans-serif" }}>₱{product.price}</h4>

                                    <h6>Quantity</h6>
                                    <div className="stockCounter d-inline">
                                        <span className="btn btn-outline-dark" onClick={decreaseQty}><i class="fa fa-minus" aria-hidden="true"></i></span>
                                        <input type="number" className="form-control count d-inline" value={quantity} readOnly />
                                        <span className="btn btn-outline-dark" onClick={increaseQty}><i class="fa fa-plus" aria-hidden="true"></i></span>
                                    </div>
                                    <br />
                                    <br />
                                    <button
                                        className="btn-56 d-inline mt-1"
                                        disabled={product.stock === 0}
                                        onClick={addToCart}
                                        style={{letterSpacing: ".1rem"}}>
                                        Add to cart
                                    </button>
                                    <br />
                                    <br />
                                    <p>Status:
                                        <span id="stock_status" className={product.stock > 0 ? 'greenColor' : 'redColor'}>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                    </p>
                                    <h5 style={{ fontFamily: "Roboto, sans-serif" }}>{product.description}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default ProductDetails
