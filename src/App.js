import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, JulietteBed } from './components';
import Home from './pages/HomePage/Home';
import StoreSect from './pages/StoreChoice/StoreChoice';
// import JulietteInfo from './pages/JuliettePage/JulietteProduct';
import GlobalStyle from './globalstyles';

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/store" exact component={StoreSect} />
        <JulietteBed>
          <Route path="/juliette" />
        </JulietteBed>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
