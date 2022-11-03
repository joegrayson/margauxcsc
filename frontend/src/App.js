import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import Home from './components/Home';

import ProductDetails from './components/product/ProductDetails';

import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import SuccessPayment from './components/cart/SuccessPayment';
import FailedPayment from './components/cart/FailedPayment';

import Login from './components/user/Login'
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';

import ProtectedRoute from './components/route/ProtectedRoute';

import { loadUser } from './actions/userActions';

import store from './store';
import axios from 'axios'

import './App.css';

function App() {

  const [paymongoApiKey, setPaymongoApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser())

    async function getPaymongoApiKey() {
      const { data } = await axios.get('/api/v1/paymongoapi');
      setPaymongoApiKey(data.paymongoApiKey)
    }
    getPaymongoApiKey();
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/cart" component={Cart} exact />
          <ProtectedRoute path="/shipping" component={Shipping} exact />
          <Route path="/successpayment" component={SuccessPayment} exact />
          <Route path="/failedpayment" component={FailedPayment} exact />


          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/password/forgot" component={ForgotPassword} exact/>
          <Route path="/password/reset/:token" component={NewPassword} exact/>

          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoute path="/password/update" component={UpdatePassword} exact />
          


        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
