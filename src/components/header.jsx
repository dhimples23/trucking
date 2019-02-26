import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import  axios from 'axios';
class Header extends Component {
  
    
      render() {
        return (
          <center>
    
            <h1>TruckingSystem</h1><br></br><br></br>
    
            <button onClick={this.showTrucks}><h5>Trucks</h5></button>
            <button><h5>Available Trucks</h5></button>
            <button><h5>Drivers</h5></button>
    
    
    
          </center >
    
    
    
        );
      }
      getTrucks = () => {
    
        console.log("Truck lists" + this.state.truck)
        if (this.state.truck === 0) {
    
          return (<tbody><td colSpan="1" style={{ textAlign: "center" }}>
           TRUCK LIST </td></tbody>)
         } 
         else if (!Array.isArray(this.state.truck)) {
          return (
    
            <tbody>
              <tr>
    
                <td>{this.state.trucks.Truckid}</td>
                <td>{this.state.trucks.LoadWeight}</td>
                <td>{this.state.trucks.Model}</td>
                <td>{this.state.trucks.MaxCapacity}</td>
                <td>{this.state.trucks.PlateNumber}</td>
                <td>{this.state.trucks.PurchasedYear}</td>
                <td>{this.state.trucks.IsAvailable}</td>\
                <td>{this.state.trucks.GrossWeight}</td>
                <td>{this.state.trucks.TireWeight}</td>
    
                <td> <button className="btn btn-success" 
                onClick={this.state.addTruck.bind(this, this.props.truck.truckID)}>
                Add</button></td>
    
              </tr>
    
    
            </tbody>
          )
    
        }
    
    }
    
    }
    
    
    
    
    
    export {Header};