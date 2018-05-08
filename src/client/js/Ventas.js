import React, { Component } from 'react'
import ListaProductos from './ListaProductos';
import request from 'superagent'


let listaProductos = []

const API_URL = 'http://localhost:3000'
let usuario = 'damian'
const fechas = new Date()
const fecha = fechas.getYear()

class Ventas extends Component {

  constructor(){
      super()
      this.state = {
        ventas: []
      }
    }

  nuevaVenta = (e) => {
    e.preventDefault()

    const registroVenta = {
      cliente: e.target.cliente.value,
      producto: e.target.producto.value,
      cantidad: e.target.cantidad.value,
      tipo_pago: e.target.tipo_pago.value,
      usuario: usuario
    }

    request
      .post(`${API_URL}/api/ventas`)
      .send(registroVenta)
      .then(() => {

        request
          .get(`${API_URL}/api/ventas`)
          .then((data) => {
            this.setState({
              ventas: data.body
            })
          })
          .catch(function(e) {
            console.log(e)
          })
      })
      .catch(function(e) {
        console.log(e)
      })
  }


  eliminarVenta = () => {
    
    console.log('todos somos')

    // request
    //   .delete(`${API_URL}/api/talentos/${elementId}`)
    //   .then(() => {
    //     console.log('registro eliminado')
    //   });

    // request
    //   .get(`${API_URL}/api/talentos`)
    //   .then((data) => {
    //       this.setState({
    //         talentos: data.body 
    //       })
    //   })

    //   .catch(function(e){
    //     console.log(e)
    //   })
  }


  render() {
    console.log(this.state.ventas)
    console.log(fecha)
    let nweLists = this.state.ventas.filter(word => word.cliente === formularioVenta.cliente.value );
  	return (
      <div>
       <form name='formularioVenta' onSubmit={ (e) => { this.nuevaVenta(e)} } >
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
           <input type="radio" value="1" name='tipo_pago' />
           <input type="radio" value="0" name='tipo_pago' />
          </div>
          <div>
             <input type="submit" value="Submit" />
          </div>  
        </form>


        <div>
          
          { nweLists.map((items) =>{
          return<ListaProductos producto={items.producto} cantidad={items.cantidad} fn={ this.eliminarVenta }/>
          // return <ListaProductos cliente={items} fn={this.borrarItem} posicion={idArray} />
          })
        }
        </div>

      </div>
  	);
  }
}



export default Ventas;