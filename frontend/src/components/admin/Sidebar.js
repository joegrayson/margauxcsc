import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        // <div>
        //     <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
        //         <div className="position-sticky">
        //             <div className="list-group list-group-flush mx-3 mt-4">
        //                 <Link to="/dashboard" className="list-group-item list-group-item-action py-2 ripple" aria-current="true"><i class="fa fa-tachometer-alt fa-fw me-3"></i><span>Dashboard</span></Link>
        //                 <a href="#productSubmenu" aria-current="true" data-toggle="collapse" aria-expanded="true" className="list-group-item list-group-item-action py-2 ripple"><i className="fa fa-spa fa-fw me-3"></i><span>Products</span></a>
        //                 <ul className="collapse list-group list-group-flush" id="productSubmenu">
        //                     <li className="list-group-item py-1">
        //                         <Link to="/admin/products"><i className="fa fa-clipboard fa-fw me-3"></i>All</Link>
        //                     </li>
        //                     <li className="list-group-item py-1">
        //                         <Link to="/admin/product"><i className="fa fa-plus fa-fw me-3"></i>Create</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        // <main className="d-flex flex-nowrap">
        //     <div className="d-flex flex-column flex-shrink-0 p-1" style={{ width: "180px" }}>
        //         <ul className="nav nav-pills flex-column mb-auto">
        //             <li>
        //                 <a href="#" className="nav-link link-dark">
        //                     <i className="fa fa-tachometer me-3"></i>Dashboard
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#" className="nav-link link-dark">
        //                     <i className="fa fa-basket-shopping me-3"></i>Orders
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#" className="nav-link link-dark">

        //                     Products
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#" className="nav-link link-dark">

        //                     Customers
        //                 </a>
        //             </li>
        //         </ul>

        //     </div>
        // </main>
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i className="fa fa-tachometer fa-fw me-2"></i>Dashboard</Link>
                    </li>
                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fa fa-spa fa-fw me-2"></i><span>Products</span>
                        </a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/admin/products"><i className="fa fa-clipboard fa-fw me-2"></i><span>All</span></Link>
                            </li>
                            <li>
                                <Link to="/admin/product"><i className="fa fa-plus fa-fw me-2"></i>Create</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket fa-fw me-2"></i><span>Orders</span></Link>
                    </li>
                    <li>
                        <Link to="/admin/users"><i className="fa fa-users fa-fw me-2"></i><span>Users</span></Link>
                    </li>
                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-users fa-fw me-2"></i><span>Reviews</span></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
