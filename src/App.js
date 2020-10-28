import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, ShopProvider, Cart } from './components';
import Home from './pages/HomePage/Home';
import StoreSect from './pages/StoreChoice/StoreChoice';
import GlobalStyle from './globalstyles';

function App() {
  return (
    <Router>
      <ShopProvider>
        <GlobalStyle></GlobalStyle>
        <Navbar></Navbar>
        <Cart />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" exact component={StoreSect} />
        </Switch>
        <Footer></Footer>
      </ShopProvider>
    </Router>
  );
}

export default App;
