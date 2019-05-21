import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './ProcessRender.css';


const process_name = ["Buy", "Roast", "Winnow", "Grind", "Package"];
const fermented_status_name = ["Raw Material", "Roasted Beans", "Winnowed Beans", "Ground Beans", "Chocolate Bars"];
const unfermented_status_name = ["Raw Material", "Roasted Beans", "Winnowed Beans", "Ground Beans", "Cocoa Powder"];

const fermented_status_list = process_name.map(((process, index) => {
  const input = (index-1<0) ? "farm" : fermented_status_name[index-1];
  const output = fermented_status_name[index];
  return(
    <div className="process-name-container">
      <div className={`process-name ${output}`}>
        <button type="button" className="btn-arrow-right">
          <NavLink to={`/data-input/Fermented/${input}-to-${output}/${process}`}>{process}</NavLink>
        </button>
      </div>
      <div className="name-text">
        <button className="name-button">
          <NavLink to={`/Fermented ${output}/search`}>{output}</NavLink>
        </button>
      </div>
    </div>
  )
}));
const unfermented_status_list = process_name.map(((process, index) => {
  const input = (index-1<0) ? "farm" : unfermented_status_name[index-1];
  const output = unfermented_status_name[index];
  return(
    <div className="process-name-container">
      <div className={`process-name ${output}`}>
        <button type="button" className="btn-arrow-right">
          <NavLink to={`/data-input/Unfermented/${input}-to-${output}/${process}`}>{process}</NavLink>
        </button>
      </div>
      <div className="name-text">
        <button className="name-button">
          <NavLink to={`/Unfermented ${output}/search`}>{output}</NavLink>
        </button>
      </div>
    </div>
  )
}));

class ProcessRender extends Component {
  render() {
    return (
      <div className="process outer-container">
        <div className="page-title">Production Process</div>
        <div className="process-title">Fermented Beans</div>
        <div className="process-container">
          {fermented_status_list}
        </div>
        <div className="process-title">Unfermented Beans</div>
        <div className="process-container">
          {unfermented_status_list}
        </div>
      </div>
      
    );
  }
}

export default ProcessRender;