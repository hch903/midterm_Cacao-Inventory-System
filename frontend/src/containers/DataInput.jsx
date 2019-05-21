import React, {Component} from 'react';
import axios from 'axios';
import './DataInput.css';

const styles = {
  input_output:{
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right_arrow:{
    position: 'relative',
    cursor: 'auto',
  }
}
const url = "http://localhost:4000";

class DataInput extends Component {
  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePlaceId = this.onChangePlaceId.bind(this);
    this.onChangeInputCategory = this.onChangeInputCategory.bind(this);
    this.onChangeInputWeight = this.onChangeInputWeight.bind(this);
    this.onChangeOutputCategory = this.onChangeOutputCategory.bind(this);
    this.onChangeOutputWeight = this.onChangeOutputWeight.bind(this);
    this.onChangeProcess = this.onChangeProcess.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Date: '',
      Process_name: '',
      Input_category_name: '',
      Input_weight: '',
      Place_id: '',
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
  onChangeInputCategory(e) {
    this.setState({Input_category_name: e.target.value});
  }
  onChangeInputWeight(e) {
    this.setState({Input_weight: e.target.value});
  }
  onChangeOutputCategory(e) {
    this.setState({Output_category_name: e.target.value});
  }
  onChangeOutputWeight(e) {
    this.setState({Output_weight: e.target.value});
  }
  onChangeProcess(e) {
    this.setState({Process_name: e.target.value.toLowercase()});
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.Input_category_name, this.state.Output_category_name)

    const newTransaction = {
      Date: this.state.Date,
      Process_name: this.state.Process_name,
      Input_category_name: this.state.Input_category_name,
      Input_weight: this.state.Input_weight,
      Place_id: this.state.Place_id,
      Output_category_name: this.state.Output_category_name,
      Output_weight: this.state.Output_weight,
    };

    axios.post(url+"/data-input", newTransaction)
      .then(res => console.log(res.data));

    this.setState({
      Date: '',
      Process_name: '',
      Place_id: '',
      Input_category_name: '',
      Input_weight: '',
      Output_category_name: '',
      Output_weight: '',
    })
  }

  render() {
    const {process} = this.props.match.params;
    const {input} = this.props.match.params;
    const {output} = this.props.match.params;
    const beans = this.props.match.params.beans_category;
    return (
      <div className="data-input outer-container">
        <div className="input-container">
          <form onSubmit={this.onSubmit}>
            <div className="page-title">{beans} Beans Data Input</div>
            <div className="date-and-id">
              <div className="date element">
                <div className="data-input date subtitle">Date</div>
                <input 
                  type="date"
                  value={this.state.Date} 
                  onChange={this.onChangeDate}
                  />
              </div>
              <div className="process element">
                <div className="data-input process subtitle">Process</div>
                <div className="select outside">
                  <select value={this.state.Process_name} onChange={this.onChangeProcess}>
                    <option value="" disabled selected>Please Select Process...</option>
                    <option value={process}>{process}</option>
                  </select>
                </div>
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
              
            <div className="input-output" style={styles.input_output}>
              <div className="input element">
                <div className="category element">
                  <div className="input-data category subtitle">Input Beans Category</div>
                  <div className="select outside">
                    <select value={this.state.Input_category_name} onChange={this.onChangeInputCategory}>
                      <option value="" disabled selected>Please Select Category...</option>
                      <option value={`${beans} ${input}`}>{beans} {input}</option>
                    </select>
                  </div>
                </div>
                <div className="weight element">
                  <div className="input-data weight subtitle">Input Weight</div>
                  <input
                    type="number"
                    min="0" 
                    value={this.state.Input_weight}
                    onChange={this.onChangeInputWeight}
                    placeholder="Please enter weight...(kg)" 
                    style={{textAlign: "center"}}></input>
                </div>
              </div>
              <div type="button" className="btn-arrow-right" style={styles.right_arrow}></div>
              <div className="output element">
                <div className="category element">
                  <div className="input-data category subtitle">Output Beans Category</div>
                  <div className="select outside">
                    <select value={this.state.Output_category_name} onChange={this.onChangeOutputCategory}>
                      <option value="" disabled selected>Please Select Category...</option>
                      <option value={`${beans} ${output}`}>{beans} {output}</option>
                    </select>
                  </div>
                </div>
                <div className="weight element">
                  <div className="input-data weight subtitle">Output Weight</div>
                  <input 
                    type="number"
                    min="0" 
                    value={this.state.Output_weight}
                    onChange={this.onChangeOutputWeight}
                    placeholder="Please enter weight...(kg)" 
                    style={{textAlign: "center"}}></input>
                </div>
              </div>
            </div>
            <div className="enter element">
              <button className="enter_button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  };
}

export default DataInput;