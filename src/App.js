import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Main from './components/index'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Route exact path="/" component={ Main }/>
        <Route exact path="/cart" component={ Cart }/>
      </div>
    );
  }
}

export default App;
