import React, { Component } from 'react';
import {Header} from './components/header.jsx'; 
import logo from './logo.svg';
import './App.css';
//import Main from './components/main.jsx';
//import Footer from './components/footer.jsx';
import  axios from 'axios';

class App extends Component {
  state = {
    truck: []
  }

  showTrucks = async () => {
    const response = await axios.get("http://localhost:8080/TruckingSystem/rest/Service/truck");
    this.setState({ truck: response.data.truck });
    console.log(this.state.truck)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header/>
           
         
        </header>
      </div>
    );
  }
}

export default App;
