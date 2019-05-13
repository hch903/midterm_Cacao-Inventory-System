import React, {Component} from 'react';
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
class DataInput extends Component {
  render() {
    const {process} = this.props.match.params;
    const {input} = this.props.match.params;
    const {output} = this.props.match.params;
    const beans = this.props.match.params.beans_category;
    return (
      <div className="data-input outer-container">
        <div className="input-container">
          <div className="page-title">{beans} Beans Data Input</div>
          <div className="date-and-id">
            <div className="date element">
              <div className="data-input date subtitle">Date</div>
              <input type="date"></input>
            </div>
            <div className="batchid element">
              <div className="data-input batchid subtitle">Batch ID</div>
              <input type="text" placeholder="Please enter batch id..." style={{textAlign: "center"}}/>
            </div>
            <div className="placeid element">
              <div className="data-input placeid subtitle">Place ID</div>
              <input type="text" placeholder="Please enter place id..." style={{textAlign: "center"}}/>
            </div>
          </div>
            
          <div className="input-output" style={styles.input_output}>
            <div className="input element">
              <div className="category element">
                <div className="input-data category subtitle">Input Beans Category</div>
                <div className="select outside">
                  <select>
                    <option value="">{beans} {input}</option>
                  </select>
                </div>
              </div>
              <div className="weight element">
                <div className="input-data weight subtitle">Input Weight</div>
                <input type="text" placeholder="Please enter weight...(kg)" style={{textAlign: "center"}}></input>
              </div>
            </div>
            <div type="button" className="btn-arrow-right" style={styles.right_arrow}></div>
            <div className="output element">
              <div className="category element">
                <div className="input-data category subtitle">Output Beans Category</div>
                <div className="select outside">
                  <select>
                    <option value="">{beans} {output}</option>
                  </select>
                </div>
              </div>
              <div className="weight element">
                <div className="input-data weight subtitle">Input Weight</div>
                <input type="text" placeholder="Please enter weight...(kg)" style={{textAlign: "center"}}></input>
              </div>
            </div>
          </div>
          <div className="enter element">
            <button className="enter_button">Submit</button>
          </div>
        </div>
      </div>
    )
  };
}

export default DataInput;