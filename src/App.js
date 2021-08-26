import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import {useGlobalContext} from './Context'
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51JM9yPSEop6uPciXJc6AdcPscpeLE00KPUS5j4ck9W2DC4GLtU0SefBZdNehUf976nbpYFJJ9R8AFnK8YNFh6CEo00cmqpzl3S');


function App() {
  const {authorizeUser} = useGlobalContext();

  useEffect(() => {
    auth
      .onAuthStateChanged((authUser) => {
        if(authUser){
          authorizeUser(authUser)
        }else{
          authorizeUser(null);
        }
      })

  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <Home></Home>
          </Route>

          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>

          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/orders">
            <Orders></Orders>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
