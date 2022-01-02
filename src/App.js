import React, {Component,useState,useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'




function App() {


  return (
    <>
    <Header></Header>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route  path="/about" component={About}></Route>
    <Route  path="/cart" component={Cart}></Route>
    </Switch>
    <Footer></Footer>
    </>
  );
}

export default App;
