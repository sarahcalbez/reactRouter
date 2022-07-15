import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Page404 from './pages/Page404';
import Login from './pages/Login';
import Cabecalho from "./components/Cabecalho";


function App() {

  return (
    <Router>
      <Cabecalho/>
      <Switch> 
        {/* The switch make it stop looking for another page with the same name */}
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route>
          <Page404 />  
          {/* If you don't set a path, it will open as default */}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
