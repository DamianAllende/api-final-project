import React, { Component } from 'react'
import request from 'superagent'
import ListaProductos from './ListaProductos';
let listaProductos = []

const API_URL = 'http://localhost:3000'

class FormVentas extends Component {
  constructor() {
    super();

    this.state = {
      venta:[],
      lista: listaProductos
    };
  }
  
nuevaVenta = (e) => {
    e.preventDefault()
     return this.setState({
     venta:{
      cliente: e.target.cliente.value,
      producto: e.target.producto.value,
      cantidad: e.target.cantidad.value 
     }
    })
    
  }



 borrarItem = (list, item) => {
    if ( item !== -1 ) {
        list.splice( item, 1 );
    }

    return console.log(list)
}

 
  render() {
    // console.log(this.state)

    this.state.lista.push(this.state.venta)
    console.log(this.state.lista)
    
  	return (
      <div>
       <form onSubmit={ (e) => { this.nuevaVenta(e)} } >
          <div>
            <p>Cliente</p>
          </div>
          <div>
            <select  name='cliente'>
              <option value="PABLO BARCENAS">PABLO BARCENAS</option>
              <option value="MARCO ANTONIO BARCENAS">MARCO ANTONIO BARCENAS</option>
              <option value="GENARO MALDONADO">GENARO MALDONADO</option>
              <option value="MIGUEL CORTINA">MIGUEL CORTINA</option>
              <option value="JOSEFINA ORTIZ">JOSEFINA ORTIZ</option>
          </select>
          </div>
          <div>
            <p>Producto</p>
          </div>
          <div>
          <select  name= 'producto' >
              <option value="" disabled>Please select an item</option>
              <option value="SILLA APILABLE">SILLA APILABLE</option>
              <option value="SILLA BASTON">SILLA BASTON</option>
              <option value="SILLA CENTURY">SILLA CENTURY</option>
              <option value="SILLA COLONIAL">SILLA COLONIAL</option>
          </select>

            <input type="number" name='cantidad'  />
          </div>
          <div>
             <input type="submit" value="Submit" />
          </div>  
        </form>

        { this.state.lista.map((items) =>{
          let idArray = this.state.lista.indexOf(items)
          return<div>
                  <input name="" value={items.producto}/>
                  <input name="" value={items.cantidad}/>
                  <button onClick={ (e) => {this.borrarItem(this.state.lista, idArray ) }} >{idArray}</button>
                </div>
          // return <ListaProductos cliente={items} fn={this.borrarItem} posicion={idArray} />
          })
        }

      </div>
  	);
  }
}



export default FormVentas;