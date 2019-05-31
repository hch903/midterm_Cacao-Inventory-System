import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import axios from 'axios';

const url = "http://localhost:4000";

const data = {
	labels: [
		    'Raw Material',
		    'Roasted Beans',
        'Winnowed Beans',
        'Ground Beans',
        'Chocolate Bars',
        // 'Cocoa Powder'
	],
	datasets: [{
		data: [0, 0, 0, 0, 0],
		backgroundColor: [
		    '#61210F',
		    '#CE8147',
        '#E09F3E',
        '#945600',
        '#C75000',
        // '#B88333'
		],
		hoverBackgroundColor: [
		    '#61210F',
		    '#CE8147',
        '#E09F3E',
        '#945600',
        '#C75000',
        // '#B88333'
		]
	}]
};

class FermentedDoughnut extends Component{
  constructor(props){
    super(props);

    this.renderNumber = this.renderNumber.bind(this);

    this.state = {
      inventory: [],
    }
    // const {title} = this.props;
    // if(title === 'Fermented Beans'){
    //   data.labels.push('Chocolate Bars');
    //   data.datasets[0].backgroundColor.push('#C75000');
    //   data.datasets[0].hoverBackgroundColor.push('#C75000');
    // }
    // else if(title === 'Unfermented Beans'){
    //   data.labels.push('Cocoa Powder');
    //   data.datasets[0].backgroundColor.push('#B88333');
    //   data.datasets[0].hoverBackgroundColor.push('#B88333');
    // }
  }
  componentDidMount() {
    axios.get(url+"/summary")
      .then(res => {
        this.setState({inventory: res.data});
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    
  }
  renderNumber() {
    const category = this.props.title;
    // console.log(category);
    return this.state.inventory.map((item) => {
      data.labels.map((current, index) => {
        // console.log(item.Status_name);
        // console.log(data.labels[index]);
        if(item.Category_name === category && item.Status_name === current){
          data.datasets[0].data[index] = item.Quantity;
        }
      })
    })
  }
  render() {
    const {title} = this.props;
    this.renderNumber();
    return (
      <div className="chart-element">
        <div className="chart-subtitle">{title}</div>
        <Doughnut 
            data={data}
            width={300}
            height={300}
            options={{ responsive: false, maintainAspectRatio: false }} />
      </div>
    );
  }
}

export default FermentedDoughnut;

