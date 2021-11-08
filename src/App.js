import React from 'react';
import './App.css';
import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
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
class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot)=>{
          this.setState({
            currentUser: {
              id : snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }else{
        this.setState({currentUser:null});
      }
    });
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
          <Route exact path='/shop/hats' component={Hats}/>
          <Route exact path='/shop/jackets' component={Jackets}/>
          <Route exact path='/shop/sneakers' component={Sneakers}/>
          <Route exact path='/shop/womens' component={Women}/>
          <Route exact path='/shop/mens' component={Men}/>
        </Switch>
      </div>
    );
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
}
export default App;