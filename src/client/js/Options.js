import React, { Component } from 'react'
import request from 'superagent'
constructor(){
      super()
      this.state = {
    
        clientes: ''
      }
    }



componentDidMount() {
      request
          .get(`${API_URL}/api/clientes`)
          .then((data) => {
            this.setState({
              clientes: data.body
            })
            
          })
          .catch(function(e) {
            console.log(e)
          })
   }


class Options extends Component {
  render() {
  	return (
        <div>
          {this.state.clientes.map((item) => {
            return <h1></h1>
          })}
        </div>
            
  	);
  }
}

export default Options;
