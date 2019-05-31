import React, {Component} from 'react';
import FermentedDoughnut from './FermentedDoughnut';
import UnfermentedDoughnut from './UnfermentedDoughnut';
import axios from 'axios';
import './Summary.css';

const beans = ["", "Raw Material", "Roasted Beans", "Winnowed Beans", "Ground Beans", "Chocolate Bars", "Cocoa Powder"];
const url = 'http://localhost:4000';

class Summary extends Component {
  constructor (props) {
    super(props);

    this.renderInventory = this.renderInventory.bind(this);
    this.renderTotal = this.renderTotal.bind(this);

    this.state = {
      inventory: [],
    }
  }
  componentDidMount() {
    axios.get(url+"/summary")
      .then(res => {
        this.setState({inventory: res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  renderInventory(category, status) {
    return this.state.inventory.map((item) => {
      if(item.Category_name === category && item.Status_name === status){
        return <td>{item.Quantity}</td>
      }
    })
  }

  renderTotal(status) {
    let total = 0;
    this.state.inventory.map((item, index) => {  
      if(item.Status_name === status){
        total += item.Quantity;
      }
    })
    return <td>{total}</td>;
  }
  render() {
    return (
      <div className="summary outer-container">
        <div className="inner-container">
          <div className="page-title">Summary</div>
          <div className="summary table-container">
            <table border="1">
              <thead>
                <tr>{beans.map(name => <th bgcolor="#945600" style={{color: "white"}}>{name}</th>)}</tr>
              </thead>
              <tbody>
                <tr>
                  <td bgcolor="#E09F3E">Fermented Beans</td>
                  {this.renderInventory('Fermented Beans', 'Raw Material')}
                  {this.renderInventory('Fermented Beans', 'Roasted Beans')}
                  {this.renderInventory('Fermented Beans', 'Winnowed Beans')}
                  {this.renderInventory('Fermented Beans', 'Ground Beans')}
                  {this.renderInventory('Fermented Beans', 'Chocolate Bars')}
                  <td>NaN</td>
                </tr>
                <tr> 
                  <td bgcolor="#E09F3E">Unfermented Beans</td>
                  {this.renderInventory('Unfermented Beans', 'Raw Material')}
                  {this.renderInventory('Unfermented Beans', 'Roasted Beans')}
                  {this.renderInventory('Unfermented Beans', 'Winnowed Beans')}
                  {this.renderInventory('Unfermented Beans', 'Ground Beans')}
                  <td>NaN</td>
                  {this.renderInventory('Unfermented Beans', 'Cocoa Powder')}
                </tr>
                <tr bgcolor="#CE8147">
                  <td>Total</td>
                  {this.renderTotal('Raw Material')}
                  {this.renderTotal('Roasted Beans')}
                  {this.renderTotal('Winnowed Beans')}
                  {this.renderTotal('Ground Beans')}
                  {this.renderTotal('Chocolate Bars')}
                  {this.renderTotal('Cocoa Powder')}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="chart-container">
            <FermentedDoughnut title="Fermented Beans"/>
            <UnfermentedDoughnut title="Unfermented Beans"/>
          </div>
            
        </div>
        
      </div>
    )
  }
}

export default Summary;