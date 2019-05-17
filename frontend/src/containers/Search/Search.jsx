import React, {Component} from 'react';
import SearchTable from './SearchTable';

class Search extends Component {
  render() {
    const {category} = this.props.match.params;
    const {status} = this.props.match.params;
    if(category !== undefined){
      return(
        <div className="search outer-container">
          <SearchTable category={category} status={status}/>
        </div>
      )
    }
    else {
      return(
        <div className="search outer-container">
          <SearchTable />
        </div>
      )
    }
  };
}

export default Search;