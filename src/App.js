import React from 'react';
import './App.css';
import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
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
  unSubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUsr} = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        // userRef.onSnapshot((snapShot)=>{
        //   this.setState({
        //     currentUser: {
        //       id : snapShot.id,
        //       ...snapShot.data()
        //     }
        //   });
        // });
        const snapShot = await userRef.get();
        try{
            setCurrentUsr({
              id : snapShot.id,
              ...snapShot.data()
            });
        }catch(error){
                console.log('error creating user', error.message);
        }
      }else{
        setCurrentUsr(null);
      }
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>{this.props.test}</h1>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={ ()=> this.props.currentUser ? (<Redirect to ='/'/>) : (<SignInAndSignUpPage/>)}/>
          <Route exact path='/shop/hats' component={Hats}/>
          <Route exact path='/shop/jackets' component={Jackets}/>
          <Route exact path='/shop/sneakers' component={Sneakers}/>
          <Route exact path='/shop/womens' component={Women}/>
          <Route exact path='/shop/mens' component={Men}/>
          <Route exact path='/checkout' component={CheckoutPage}/>

        </Switch>
      </div>
    );
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch =>({
  setCurrentUsr : user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);