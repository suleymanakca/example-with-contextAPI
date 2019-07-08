import React from 'react';
import './App.css';
import NavBar from './layout/Navbar';
import Users from './components/Users';
import AddUser from './components/AddUser';
import NotFound from './pages/NotFound';
import Contribute from './pages/Contribute';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';  


class App extends React.Component {


  render(){
    return (
      <Router>
        <div className="container">
            <NavBar title = "User App"/>
            <hr/>
            <Switch>
              <Route exact path="/" component={Users}/>
              <Route exact path="/add" component={AddUser}/>
              <Route exact path="/github" component={Contribute}/>
              <Route component={NotFound}/>
            </Switch>
        </div>
      </Router>
      
      );
    }
  }


export default App;
