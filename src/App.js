import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import User from './components/User';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <h1 >Merhaba React</h1>
        <NavBar title = "User App"/>
        <hr/>
        <User
          name="Süleyman Akça"
          department="Ceng"
          salary="2000"
        />
         <User
          name="Kamil Çubukçu"
          department="EEE"
          salary="3000"
        />
      </div>
      );
    }
  }


export default App;
