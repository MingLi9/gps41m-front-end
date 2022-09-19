import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListProductComponent from './components/Product/ListProductComponent';
import CreateProductComponent from './components/Product/CreateProductComponent';
import ViewProductComponent from './components/Product/ViewProductComponent';
import LoginComponent from './components/User/LoginComponent';
import RegisterComponent from './components/User/RegisterComponent';
import EditComponent from './components/User/EditComponent';
import UpdateProductComponent from './components/Product/UpdateProductComponent';
import CartComponent from './components/Shoppingcart/CartComponent';
import {Provider} from 'react-redux';
import store from './components/Store/Store';

function App() {
  return (
    <Provider store={store}>
      <div>
          <Router>
                <HeaderComponent />
                  <div style={{paddingTop: 20}} className="container">
                      <Switch>
                            <Route path = "/" exact component = {ListProductComponent}></Route>
                            <Route path = "/products" component = {ListProductComponent}></Route>
                            <Route path = "/add-product/:id" component = {CreateProductComponent}></Route>
                            <Route path = "/view-product/:id" component = {ViewProductComponent}></Route>
                            <Route path = "/update-product/:id" component = {UpdateProductComponent}></Route>
                            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                            <Route path = "/login/" component = {LoginComponent}/>
                            <Route path = "/register/" component = {RegisterComponent}/>
                            <Route path = "/userdetails/" component = {EditComponent}/>
                            <Route path = "/shoppingcart/" component = {CartComponent}/>
                      </Switch>
                  </div>
                <FooterComponent />
          </Router>
      </div>
    </Provider>
  );
}

export default App;
