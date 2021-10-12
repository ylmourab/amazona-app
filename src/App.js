import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">amazona</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {
              data.products.map(product =>(
                <Products key = {product.id} product={product}/>

              ))

            }
         

          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </div>
  );
}

export default App;

