import React, {Component} from 'react';
import SearchTable from './SearchTable';
import SelectedSearchTable from './SelectedSearchTable';


class Search extends Component {
  render() {
    const {category} = this.props.match.params;
    if(category !== undefined){
      return(
        <div className="search outer-container">
          <SelectedSearchTable category={category}/>
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