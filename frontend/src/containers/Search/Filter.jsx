import React, {Component} from 'react';
import axios from 'axios';

const option_title = ["Date", "Process", "Place ID"]
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

class Filter extends Component {
  constructor(props){
    super(props);

    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangeProcess = this.onChangeProcess.bind(this);
    this.onChangePlaceId = this.onChangePlaceId.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // this.handleSelectOption = this.handleSelectOption.bind(this);

    this.state = {
      // option: '',
      // option_element: [],

      start_date: '',
      end_date: '',
      process: '',
      placeId: '',

      transaction: [],
    }
  }

  onChangeStartDate(e) {
    this.setState({start_date: e.target.value});
  }
  onChangeEndDate(e) {
    this.setState({end_date: e.target.value});
  }
  onChangeProcess(e) {
    this.setState({process: e.target.value});
  }
  onChangePlaceId(e) {
    this.setState({placeId: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();

    const query = {
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      process: this.state.process,
      placeId: this.state.placeId,
    }

    axios.post(url+'/search', query)
      .then(res => {
        this.props.returnTransaction(res.data);
      })
      .catch(err => console.log(err));

    this.setState({
      start_date: '',
      end_date: '',
      process: '',
      placeId: '',
    })
  }
  clearFilter() {
    axios.get(url+"/search")
      .then(res => {
        this.props.returnTransaction(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }
  // renderTransactions() {
  //   return this.props.transaction.map((current, index) => {
  //     return <Transactions transaction={current} key={index}/>
  //   })
  // }
  // renderOptions() {
  //   return this.state.option_element.pop();
  // }
  // handleSelectOption(e) {
  //   this.setState({option: e.target.value});

  //   var select = document.getElementById("option-select");
  //   const {category} = this.props;
  //   if(select.options[1].selected === true){
  //     const dom = 
  //       <div className="filter-element date">
  //         <div className="option-subtitle">Date</div>
  //         <input 
  //           type="date"
  //           value={}
  //           onChange={this.onChangeStartDate}
  //           ></input>
  //         <div>to</div>
  //         <input 
  //           type="date"
  //           value={this.state.end_date}
  //           onChange={this.onChangeEndDate}
  //           ></input>
  //       </div>
  //     this.setState({option_element: [dom]});
  //     console.log(this.state.start_date);
  //   }
  //   else if(select.options[2].selected === true){
  //     if (category !== undefined){
  //       if (category === "Fermented Raw Material" || category === "Unfermented Raw Material"){
  //         const dom = 
  //           <div className="filter-element process">
  //             <div className="option-subtitle">Process</div>
  //             <select value={this.state.process} onChange={this.onChangeProcess}>
  //               <option value="" disabled selected>Please Select Process...</option>
  //               <option value="buy">Buy</option>
  //               <option value="roast">Roast</option>
  //             </select>
  //           </div>
  //         this.setState({option_element: [dom]});
  //       }
  //       else if(category === "Fermented Roasted Beans" || category === "Unfermented Roasted Beans"){
  //         const dom = 
  //           <div className="filter-element process">
  //             <div className="option-subtitle">Process</div>
  //             <select value={this.state.process} onChange={this.onChangeProcess}>
  //               <option value="" disabled selected>Please Select Process...</option>
  //               <option value="roast">Roast</option>
  //               <option value="winnow">Winnow</option>
  //             </select>
  //           </div>
  //         this.setState({option_element: [dom]});
  //       }
  //       else if(category === "Fermented Winnowed Beans" || category === "Unfermented Winnowed Beans"){
  //         const dom = 
  //           <div className="filter-element process">
  //               <div className="option-subtitle">Process</div>
  //               <select value={this.state.process} onChange={this.onChangeProcess}>
  //                 <option value="" disabled selected>Please Select Process...</option>
  //                 <option value="winnow">Winnow</option>
  //                 <option value="grind">Grind</option>
  //               </select>
  //             </div>
  //         this.setState({option_element: [dom]});
  //       }
  //       else if(category === "Fermented Ground Beans" || category === "Unfermented Ground Beans"){
  //         const dom = 
  //           <div className="filter-element process">
  //               <div className="option-subtitle">Process</div>
  //               <select value={this.state.process} onChange={this.onChangeProcess}>
  //                 <option value="" disabled selected>Please Select Process...</option>
  //                 <option value="grind">Grind</option>
  //                 <option value="package">Package</option>
  //               </select>
  //             </div>
  //         this.setState({option_element: [dom]});
  //       }
  //       else if(category === "Fermented Chocolate Bars" || category === "Unfermented Cacao Powder"){
  //         const dom = 
  //           <div className="filter-element process">
  //               <div className="option-subtitle">Process</div>
  //               <select value={this.state.process} onChange={this.onChangeProcess}>
  //                 <option value="" disabled selected>Please Select Process...</option>
  //                 <option value="package">Package</option>
  //               </select>
  //             </div>
  //         this.setState({option_element: [dom]});
  //       }
  //     }
  //     else {
  //       const dom = 
  //         <div className="filter-element process">
  //           <div className="option-subtitle">Process</div>
  //           <select value={this.state.process} onChange={this.onChangeProcess}>
  //             <option value="" disabled selected>Please Select Process...</option>
  //             <option value="buy">Buy</option>
  //             <option value="roast">Roast</option>
  //             <option value="winnow">Winnow</option>
  //             <option value="grind">Grind</option>
  //             <option value="package">Package</option>
  //           </select>
  //         </div>
  //       this.setState({option_element: [dom]});
  //     }
  //   }
  
  //   else if(select.options[3].selected === true){
  //     const dom = 
  //       <div className="filter-element placeId">
  //         <div className="option-subtitle">Place ID</div>
  //         <input 
  //           type="number" 
  //           min="0" 
  //           value={this.state.placeId} 
  //           onChange={this.onChangePlaceId}
  //           placeholder="Please enter ID..." 
  //           style={{textAlign: "center"}}/>
  //       </div>
  //     this.setState({option_element: [dom]});
  //   }
  // }
  render() {
    const {category} = this.props;
    const filter_list = option_title.map((option, i) => {
      if(option === "Date"){
        return (
          <div className="filter-element date" key={i}>
            <div className="option-subtitle">{option}</div>
            <input 
              type="date"
              value={this.state.start_date}
              onChange={this.onChangeStartDate}
              ></input>
            <div>to</div>
            <input 
              type="date"
              value={this.state.end_date}
              onChange={this.onChangeEndDate}
              ></input>
          </div>
        )
      }
      else if(option === "Process"){
        if (category !== undefined){
          if (category === "Fermented Raw Material" || category === "Unfermented Raw Material"){
            return (
              <div className="filter-element process" key={i}>
                <div className="option-subtitle">{option}</div>
                <select value={this.state.process} onChange={this.onChangeProcess}>
                  <option value="" disabled selected>Please Select Process...</option>
                  <option value="buy">Buy</option>
                  <option value="roast">Roast</option>
                </select>
              </div>
            )
          }
          else if(category === "Fermented Roasted Beans" || category === "Unfermented Roasted Beans"){
            return(
              <div className="filter-element process" key={i}>
                <div className="option-subtitle">{option}</div>
                <select value={this.state.process} onChange={this.onChangeProcess}>
                  <option value="" disabled selected>Please Select Process...</option>
                  <option value="roast">Roast</option>
                  <option value="winnow">Winnow</option>
                </select>
              </div>
            )
          }
          else if(category === "Fermented Winnowed Beans" || category === "Unfermented Winnowed Beans"){
            return(
              <div className="filter-element process" key={i}>
                <div className="option-subtitle">{option}</div>
                <select value={this.state.process} onChange={this.onChangeProcess}>
                  <option value="" disabled selected>Please Select Process...</option>
                  <option value="winnow">Winnow</option>
                  <option value="grind">Grind</option>
                </select>
              </div>
            )
          }
          else if(category === "Fermented Ground Beans" || category === "Unfermented Ground Beans"){
            return(
              <div className="filter-element process" key={i}>
                <div className="option-subtitle">{option}</div>
                <select value={this.state.process} onChange={this.onChangeProcess}>
                  <option value="" disabled selected>Please Select Process...</option>
                  <option value="grind">Grind</option>
                  <option value="package">Package</option>
                </select>
              </div>
            )
          }
          else if(category === "Fermented Chocolate Bars" || category === "Unfermented Cacao Powder"){
            return(
              <div className="filter-element process" key={i}>
                <div className="option-subtitle">{option}</div>
                <select value={this.state.process} onChange={this.onChangeProcess}>
                  <option value="" disabled selected>Please Select Process...</option>
                  <option value="package">Package</option>
                </select>
              </div>
            )
          }
        }
        else {
          return (
            <div className="filter-element process" key={i}>
              <div className="option-subtitle">{option}</div>
              <select value={this.state.process} onChange={this.onChangeProcess}>
                <option value="" disabled selected>Please Select Process...</option>
                <option value="buy">Buy</option>
                <option value="roast">Roast</option>
                <option value="winnow">Winnow</option>
                <option value="grind">Grind</option>
                <option value="package">Package</option>
              </select>
            </div>
          )
        }
      }
      // else if(option === "Weight"){
      //   return (
      //     <div className="filter-element" key={i}>
      //       <div className="option-subtitle">{option}</div>
      //       <div className="option">
      //         <select value={this.state.weight_inorout} onChange={this.onChangeInOrOut}>
      //           <option value="" disabled selected>Input/Output...</option>
      //           <option value="input">Input</option>
      //           <option value="output">Output</option>
      //         </select>
      //       </div>
      //       <div className="option">
      //         <select value={this.state.weight_symbol} onChange={this.onChangeSymbol}>
      //           <option value="" disabled selected></option>
      //           <option value="greater">></option>
      //           <option value="less">&lt;</option>
      //           <option value="equal">=</option>
      //           <option value="greater or equal">>=</option>
      //           <option value="less or equal">&lt;=</option>
      //         </select>
      //         <input 
      //           type="number" 
      //           min="0" 
      //           value={this.state.weight} 
      //           onChange={this.onChangeWeight}
      //           placeholder="Please enter weight(kg)" 
      //           style={{textAlign: "center"}}/>
      //       </div>
      //     </div>
      //   )
      // }
      else if(option === "Place ID"){
        return (
          <div className="filter-element placeId" key={i}>
            <div className="option-subtitle">{option}</div>
            <input 
              type="number" 
              min="0" 
              value={this.state.placeId} 
              onChange={this.onChangePlaceId}
              placeholder="Please enter ID..." 
              style={{textAlign: "center"}}/>
          </div>
        )
      }})
    return (
      <div className="filter-container">
        <form className="filter-form" id="filter-form" onSubmit={this.onSubmit}>
          <div className="filter-subtitle">Filter
            {/* <select 
              id="option-select"
              value={this.state.option}
              onChange={this.handleSelectOption}>
              <option value="" disabled selected>Please Select Filter Option...</option>
              <option value="date">Date</option>
              <option value="process">Process</option>
              <option value="place id">Place ID</option>
            </select> */}
          </div>
          {filter_list}
            <div className="button element">
              <div className="clear-element">
                <button className="clear_button" onClick={this.clearFilter}>Clear Filter</button>
              </div>
              <div className="enter element" id="enter">
                <button className="enter_button">Submit</button>
              </div>
            </div>
        </form>
      </div>
    )
  };
};

export default Filter;