import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/HomePage/Home';
import StoreHome from './pages/StorePage/StoreHome';
import GlobalStyle from './globalstyles';

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/store" exact component={StoreHome} />
      </Switch>
    </Router>
  );
}

export default App;
