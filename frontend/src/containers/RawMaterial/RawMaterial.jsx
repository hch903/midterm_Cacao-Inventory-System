import React, {Component} from 'react';
import './RawMaterial.css'
import RawMaterialInput from './RawMaterialInput';

import axios from 'axios';

const url = "http://localhost:4000";
class RawMaterial extends Component {
  // componentDidMount() {
  //   console.log("in")
  //   axios.get(url + '/raw-material')
  //     .then((req, res) => {
  //       console.log(req.data);
  //   })
  // }
  render() {
    return (
      <div className="raw-material outer-container">
        <RawMaterialInput />
      </div>
    )
  }
}

export default RawMaterial;