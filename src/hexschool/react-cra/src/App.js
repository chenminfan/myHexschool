
import Header from './components/module/Header';
import ProdCard from './components/module/ProdCard';
import Cart from './components/module/Cart';
import ShoppingCartProvider from './components/module/ShoppingCart/ShoppingCartProvider';
import { data } from './data/prodCart';
import './assets/App.css';
import './assets/all.scss'

const App = () => {
  return (
    <ShoppingCartProvider>
      <Header headerTitle="react cart"></Header>
      <main className="App">
        <div className="container-fluid py-2">
          <div className='row'>
            <div className="col-lg-7 col-md-12 col-prodCard">
              <div className='d-flex flex-wrap justify-content-start'>
                <ProdCard prodData={data} />
              </div>
            </div>
            <div className="col-lg-5 col-md col-cart">
              {/* {state.cartList.length > 0 && }  */}
              <Cart />
            </div>
          </div>
          <div className="col-sm-5">


          </div>
        </div>
      </main>
    </ShoppingCartProvider >
  );
}

export default App;


