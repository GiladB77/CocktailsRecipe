import React from 'react'
import './App.css';
import Nav from './Nav'
import Recipes from './Recipes'
import About from './About'
import Home from './Home'
import ItemDetail from './ItemDetail'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Recipes" exact component={Recipes} />
          <Route path="/Recipes/:id" component={ItemDetail} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
