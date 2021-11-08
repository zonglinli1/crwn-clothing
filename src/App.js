import React from 'react';
import './App.css';
import HomePage from './pages/hompage/homepage.component';
import {Switch, Route} from 'react-router-dom';
const Hats = (props) => {
  return (
  <div>
    <h1>Hats</h1>
    <button onClick={()=> props.history.push('/')}>to homepage</button>
  </div>
  );
}
const Jackets = (props) => {
  return (
  <div>
    <h1>Jackets</h1>
    <button onClick={()=> props.history.push('/')}>to homepage</button>
  </div>
  );
}
const Sneakers = (props) => {
  return (
  <div>
    <h1>Sneakers</h1>
    <button onClick={()=> props.history.push('/')}>to homepage</button>
  </div>
  );
}
const Women = (props) => {
  return (
  <div>
    <h1>Women</h1>
    <button onClick={()=> props.history.push('/')}>to homepage</button>
  </div>
  );
}
const Men = (props) => {
  return (
  <div>
    <h1>Men</h1>
    <button onClick={()=> props.history.push('/')}>to homepage</button>
  </div>
  );
}

export default function App() {
  return (
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={Hats}/>
        <Route exact path='/shop/jackets' component={Jackets}/>
        <Route exact path='/shop/sneakers' component={Sneakers}/>
        <Route exact path='/shop/womens' component={Women}/>
        <Route exact path='/shop/mens' component={Men}/>
      </Switch>
  );
}
