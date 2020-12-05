import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './comp/NavBar';
import HomePage from './comp/HomePage'
import ProductCategory from './comp/ProductCategory';
import ProductDetail from './comp/ProductDetail';
import MyCart from './comp/MyCart';
import Chackout from './comp/Chackout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product-category" component={ProductCategory} />
          <Route exact path="/product-detail/:slug/:id" component={ProductDetail} />
          <Route exact path="/MyCart" component={MyCart} />
          <Route exact path="/Chackout" component={Chackout} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
