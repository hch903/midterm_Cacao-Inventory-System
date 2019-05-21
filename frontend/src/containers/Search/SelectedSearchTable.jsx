import React, {Component} from 'react';
import Filter from './Filter';
import './SearchTable.css';
import axios from 'axios';


const title_head = ["Date", "Process", "Place ID", "Input Beans", "Input Weight(kg)", "Output Beans", "Output Weight(kg)"]
const option_title = ["Date", "Process", "Weight", "Place ID"]

const Transactions = props => (
  <tr>
    <td>{props.transaction.Date}</td>
    <td>{props.transaction.Process_name}</td>
    <td>{props.transaction.Place_id}</td>
    <td>{props.transaction.Input_category_name}</td>
    <td>{props.transaction.Input_weight}</td>
    <td>{props.transaction.Output_category_name}</td>
    <td>{props.transaction.Output_weight}</td>
  </tr>
)
const url = "http://localhost:4000";
class SelectedSearchTable extends Component {
  constructor(props) {
    super(props);

    this.renderTransactions = this.renderTransactions.bind(this);
    this.getTransaction = this.getTransaction.bind(this);
    this.state = {
      transaction: [],
    };
  }
  componentDidMount() {
    const {category} = this.props;
    axios.get(url+"/"+category) 
      .then(res => {
        this.setState({transaction: res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  getTransaction(trans) {
    this.setState({transaction: trans})
    // this.renderTransactions(trans);
  }
  
  renderTransactions() {
    if (this.state.transaction !== null){
      return this.state.transaction.map((current, index) => {
        return <Transactions transaction={current} key={index}/>
      });
    }
  }
  render() {
    const category = this.props.category;
    return (
      <div className="table-container">
        <div className="page-title">{category} Search Table</div>
        <div className="filter-container">
          <Filter category={category} returnTransaction={this.getTransaction}/>
        </div>
        <div className="data-container">
          <table border="1">
            <thead>
              <tr bgcolor="#945600" style={{color: "white"}}>
              {title_head.map(((title_head, i) => 
                <th key={i}>{title_head}</th>
              ))}
              </tr>
            </thead>
            <tbody>
              {this.renderTransactions()}
            </tbody>
          </table>
        </div>
      </div>
    )
  };
}

export default SelectedSearchTable;