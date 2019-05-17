import React, {Component} from 'react';

import './RawMaterial.css';

const Beans = ["Wet Beans", "Fermented Beans", "Unfermented Beans"];
class RawMaterialInput extends Component {
    render() {
        return (
            <div className="input-container">
              <div className="page-title">Raw Material Purchase</div>
              <div className="date-and-id">
                <div className="date element">
                  <div className="raw date subtitle">Date</div>
                  <input type="date"></input>
                </div>
                <div className="batchid element">
                  <div className="data-input batchid subtitle">Batch ID</div>
                  <input
                    type="number"
                    min="0" 
                    placeholder="Please enter batch id..." 
                    style={{textAlign: "center"}}/>
                </div>
                <div className="placeid element">
                  <div className="data-input placeid subtitle">Place ID</div>
                  <input 
                    type="number"
                    min="0"
                    placeholder="Please enter place id..." 
                    style={{textAlign: "center"}}/>
                </div>
              </div>
                
              <div className="category element">
                <div className="raw category subtitle">Beans Category</div>
                <div className="select outside">
                  <select>
                    <option value="" disabled selected>Please Select Category...</option>
                    {Beans.map((category =>
                      <option value={category}>{category}</option>  
                    ))}
                  </select>
                </div>
              </div>
              <div className="weight element">
                <div className="raw weight subtitle">Input Weight</div>
                <input 
                  type="number"
                  min="0" 
                  placeholder="Please enter weight...(kg)" 
                  style={{textAlign: "center"}}></input>
              </div>
              <div className="enter element">
                <button className="enter_button">Submit</button>
              </div>
            </div>
        )
    }
}

export default RawMaterialInput;