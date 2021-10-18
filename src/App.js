
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">amazona</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <Route path = "/" component={HomeScreen} exact></Route>
        <Route path = "/product/:id" component={ProductScreen} ></Route>
        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

