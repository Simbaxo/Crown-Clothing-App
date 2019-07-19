import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      {/* Switch only render the first match */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* Quick Example of Router */}
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
