import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import AdminDashBoard from './components/AdminDashboard/AdminDashboard';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Products from './components/Products/Products';
export const ProductItemContext = createContext([])

export const UserContext = createContext();

function App() {
  const [productItem, setProductItem] = useState({})
  const [loggedInUser, setLoggedInUser] = useState({});

 
  return (
    

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ProductItemContext.Provider value={[productItem, setProductItem]}>
     
        <Router>
          
              <Switch>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <PrivateRoute path="/admin">
                  <AdminDashboard />
                </PrivateRoute>
                <Route path="/cart">
                  <ShoppingCart />
                </Route>
                <Route path="/">
                  <Header />
                  <Home />
                  <Products />
                </Route>
              </Switch>
          
        </Router>
    
      </ProductItemContext.Provider>
    </UserContext.Provider>
    
  );
}



export default App;
