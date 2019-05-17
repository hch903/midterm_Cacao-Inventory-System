import React, {Component} from 'react';
import './RawMaterial.css'
import RawMaterialInput from './RawMaterialInput';


class RawMaterial extends Component {
  render() {
    return (
      <div className="raw-material outer-container">
        <RawMaterialInput />
      </div>
    )
  }
}

export default RawMaterial;