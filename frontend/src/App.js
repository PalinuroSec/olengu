import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import HomeHost from './Pages/HomeHost';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import InsertItem from './Pages/InsertItem';
import ItemDetails from './Pages/ItemDetails';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return(
    <Router>
      <Switch>
        <div className="Home">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/become_host" component={HomeHost} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/dashboard/:id" component={ItemDetails}/>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/InsertItem" component={InsertItem} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
