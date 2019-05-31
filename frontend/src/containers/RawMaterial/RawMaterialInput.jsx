import React, {Component} from 'react';
import axios from 'axios';
import './RawMaterial.css';


const Beans = ["Wet Beans", "Fermented Beans", "Unfermented Beans"];
const url = "http://localhost:4000";
class RawMaterialInput extends Component {
  constructor (props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePlaceId = this.onChangePlaceId.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Date: '',
      Process_name: "Buy",
      Input_category_name: 'none',
      Input_weight: '0',
      Place_id: '',
      Category: '',
      Output_category_name: '',
      Output_weight: '',
    };
  }

  onChangeDate(e) {
    this.setState({Date: e.target.value});
  }
  onChangePlaceId(e) {
    this.setState({Place_id: e.target.value});
  }
  onChangeCategory(e) {
    if(e.target.value === 'Fermented Beans' || e.target.value === 'Wet Beans'){
      this.setState({Output_category_name: 'Fermented Raw Material'});
      this.setState({Category: e.target.value});
    }
    else{
      this.setState({Output_category_name: 'Unfermented Raw Material'});
      this.setState({Category: e.target.value});
    }
  }
  onChangeWeight(e) {
    this.setState({Output_weight: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      Date: this.state.Date,
      Process_name: "Buy",
      Input_category_name: "None",
      Input_weight: 0,
      Place_id: this.state.Place_id,
      Output_category_name: this.state.Output_category_name,
      Output_weight: this.state.Output_weight,
    };

    axios.post(url+"/raw-material", newTransaction)
      .then(
        res => {
          const status = this.refs.status;
          let statusDefault = status.textContent;
          const setStatus = s => {
            // Setting status
            status.textContent = s;
        
            // Resetting status to default every x seconds
            if (s !== statusDefault) {
                setTimeout(() => {
                    setStatus(statusDefault);
                }, 2000);
            }
          };
          setStatus(res.data);
        }
      );

    this.setState({
      Date: '',
      Place_id: '',
      Category: '',
      Output_category_name: '',
      Output_weight: '',
    })
  }
  
  render() {
    return (
      <div className="input-container">
        <form onSubmit={this.onSubmit}>
          <div className="page-title">Raw Material Purchase</div>
          <div className="date-and-id">
            <div className="date element">
              <div className="raw date subtitle">Date</div>
              <input 
                type="date" 
                value={this.state.Date} 
                onChange={this.onChangeDate}
                />
            </div>
            <div className="placeid element">
              <div className="data-input placeid subtitle">Place ID</div>
              <input 
                type="number"
                min="0"
                value={this.state.Place_id}
                onChange={this.onChangePlaceId}
                placeholder="Please enter place id..." 
                style={{textAlign: "center"}}/>
            </div>
          </div>
            
          <div className="category element">
            <div className="raw category subtitle">Beans Category</div>
            <div className="select outside">
              <select value={this.state.Category} onChange={this.onChangeCategory}>
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
              value={this.state.Output_weight}
              onChange={this.onChangeWeight}
              placeholder="Please enter weight...(kg)" 
              style={{textAlign: "center"}}></input>
          </div>
          <div className="enter element">
            <button className="enter_button">Submit</button>
            <div id="status" ref="status"></div>
          </div>
        </form>
        
      </div>
    )
  }
}

export default RawMaterialInput;