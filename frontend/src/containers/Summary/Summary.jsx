import React, {Component} from 'react';
import DoughnutExample from '../Chart.js';
import './Summary.css';

const beans = ["", "Raw Material", "Roasted Beans", "Winnowed Beans", "Ground Beans", "Chocolate Bars", "Cocoa Powder"];


class Summary extends Component {
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
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr> 
                  <td bgcolor="#E09F3E">Unfermented Beans</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr bgcolor="#CE8147">
                  <td>Total</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="chart-container">
            <DoughnutExample />
            <DoughnutExample />
          </div>
            
        </div>
        
      </div>
    )
  }
}

export default Summary;