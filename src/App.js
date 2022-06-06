import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import LatestProduct from './components/LatestProduct';
import BmAccessories from './components/BmAccessories';
import Categories from './components/Categories';
import Accessories from './components/Accessories';
import Headset from './components/Headset';
import SmartDevices from './components/SmartDevices';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/accessories" component={Accessories} />
        <Route exact path="/headset" component={Headset} />
        <Route exact path="/smart" component={SmartDevices} />
        <Route exact path="/latestproducts" component={LatestProduct} />
        <Route exact path="/bmaccessories" component={BmAccessories} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
