import React, { Component } from 'react'

class ListaProductos extends Component {
  render() {
    console.log()

  	return (
      <div>
        <h1>{this.props.producto}</h1>
        <h1>{this.props.cantidad}</h1>
         <button onClick={ () => { this.props.fn() }  } >Borrar</button>
                
      
      </div>
  	);
  }
}

export default ListaProductos;

