import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, col }) => {
    return (
        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>

            <Link to={`/product/${product._id}`}><div className="card p-3 rounded">
                <Link to={`/product/${product._id}`}><img
                    className="card-img-top mx-auto"
                    src={product.images[0].url} alt="something like a plant"
                /></Link>
                <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                    </h5>
                    
                    <p className="card-text">₱{product.price}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Product
