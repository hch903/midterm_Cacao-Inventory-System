import React, {Component} from 'react';
import './SearchTable.css';

const title_head = ["Date", "Process", "Input Beans", "Input Weight(kg)", "Output Beans", "Output Weight(kg)"]
const option_title = ["Date", "Process", "Input Weight", "Output Weight"]


class SearchTable extends Component {
  render() {
    const category = this.props.category;
    const status = this.props.status;
    const filter_list = option_title.map((option) => {
      if(option === "Date"){
        return (
          <div className="filter-element">
            <div className="option-subtitle">{option}</div>
            <input type="date"></input>
            <div>to</div>
            <input type="date"></input>
          </div>
        )
      }
      else if(option === "Process"){
        if (status === "Raw Material"){
          return (
            <div className="filter-element">
              <div className="option-subtitle">{option}</div>
              <select>
                <option value="buy">Buy</option>
                <option value="roast">Roast</option>
              </select>
            </div>
          )
        }
        else if(status === "Roasted Beans"){
          return(
            <div className="filter-element">
              <div className="option-subtitle">{option}</div>
              <select>
                <option value="roast">Roast</option>
                <option value="winnow">Winnow</option>
              </select>
            </div>
          )
        }
        else if(status === "Winnowed Beans"){
          return(
            <div className="filter-element">
              <div className="option-subtitle">{option}</div>
              <select>
                <option value="winnow">Winnow</option>
                <option value="grind">Grind</option>
              </select>
            </div>
          )
        }
        else if(status === "Ground Beans"){
          return(
            <div className="filter-element">
              <div className="option-subtitle">{option}</div>
              <select>
                <option value="grind">Grind</option>
                <option value="package">Package</option>
              </select>
            </div>
          )
        }
        else if(status === "Chocolate Bars" || status === "Cacao Powder"){
          return(
            <div className="filter-element">
              <div className="option-subtitle">{option}</div>
              <select>
                <option value="package">Package</option>
              </select>
            </div>
          )
        }
        else {
          return (
            <div className="filter-element">
              <div className="option-subtitle">{option}</div>
              <select>
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
      else if(option === "Input Weight" || option === "Output Weight"){
        return (
          <div className="filter-element">
            <div className="option-subtitle">{option}</div>
            <div className="option">
              <select>
                <option value="greater">></option>
                <option value="less">&lt;</option>
                <option value="equal">=</option>
                <option value="greater or equal">>=</option>
                <option value="less or equal">&lt;=</option>
              </select>
              <input type="text" placeholder="Please enter weight(kg)..."/>
            </div>
          </div>
        )
      }
    });
    return (
      <div className="table-container">
        <div className="page-title">{category} {status} Search Table</div>
        <div className="filter-container">
          <div className="filter-subtitle">Filter</div>
          {filter_list}
          <div className="enter element">
            <button className="enter_button">Submit</button>
          </div>
        </div>
        <div className="data-container">
          <table border="1">
            <thead>
              <tr bgcolor="#945600" style={{color: "white"}}>
              {title_head.map((title_head => 
                <th>{title_head}</th>
              ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>2019/5/13</td>
                <td>Roast</td>
                <td>Unfermented Roast Beans</td>
                <td>30</td>
                <td>Unfermented Winnowed Beans</td>
                <td>28.5</td>
              </tr>
            </tbody>
            <tfoot>
              <tr bgcolor="#CE8147">
                <td>Total</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
      
    )
  };
}

export default SearchTable;