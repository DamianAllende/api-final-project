import React, { Component } from 'react'
import request from 'superagent'
import { LineChart, Line, CartesianGrid, XAxis } from 'recharts';
const API_URL = 'http://localhost:3000'


 let data = [{ name: 'a', value: 12 },
 { name: 'b', value: 2 },
 { name: 'c', value: 122 }];

class Options extends Component {
  render() {
  	return (
        <div>
         <LineChart width={400} height={400} data={data}>
         <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
         <XAxis dataKey="name" />
  
</LineChart>
        </div>
            
  	);
  }
}

export default Options;
