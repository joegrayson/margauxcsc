import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

import Search from './Search'

import '../../App.css'

const Header = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success("Logged out successfully.")
    }
 
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container-md">
                    <Link to="/"><a className="navbar-brand" href="/#">MARGAUX</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Route render={({ history }) => <Search history={history} />} />
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link" style={{ textDecoration: 'none' }}>
                                    <i id="my_cart" className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    <span className="ml-1" id="cart_count"> {cartItems.length}</span>
                                </Link>
                            </li>
                            {user ? (
                                <div className="ml-4 dropdown d-inline">
                                    <Link to="#!" className="btn dropdown-toggle text-black mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <figure className="avatar avatar-nav">
                                            <img
                                                src={user.avatar && user.avatar.url}
                                                alt={user && user.name}
                                                className="rounded-circle"
                                            />
                                        </figure>
                                        <span>{user && user.name}</span>
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                        {user && user.role === 'admin' && (
                                            <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                        )}
                                        <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                        <Link className="dropdown-item" to="/me">Profile</Link>
                                        <Link className="dropdown-item text-black" to="/" onClick={logoutHandler}>
                                            Logout
                                        </Link>
                                    </div>
                                </div>
                            ) : !loading &&
                            <li className="nav-item">
                                <Link className="btn ml-4" id="login_btn" to="/login">LOGIN</Link>
                            </li>}
                        </ul>

                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
