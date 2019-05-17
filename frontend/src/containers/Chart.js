import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Raw Material',
		'Roasted Beans',
        'Winnowed Beans',
        'Ground Beans',
        'Chocolate Bars',
        'Cocoa Powder'
	],
	datasets: [{
		data: [300, 50, 100, 400, 500, 60],
		backgroundColor: [
		'#61210F',
		'#CE8147',
        '#E09F3E',
        '#945600',
        '#C75000',
        '#B88333'
		],
		hoverBackgroundColor: [
		'#61210F',
		'#CE8147',
        '#E09F3E',
        '#945600',
        '#C75000',
        '#B88333'
		]
	}]
};

class DoughnutExample extends Component{
  render() {
    return (
      <div className="chart-element">
        <div className="chart-subtitle">Unfermented Beans</div>
        <Doughnut 
            data={data}
            width={300}
            height={300}
            options={{ responsive: false, maintainAspectRatio: false }} />
      </div>
    );
  }
}

export default DoughnutExample;

