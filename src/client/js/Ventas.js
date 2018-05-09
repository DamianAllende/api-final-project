import React, { Component } from 'react'
import request from 'superagent'

import ListaProductos from './ListaProductos'



let listaProductos = []

const API_URL = 'http://localhost:3000'
let usuario = 'damian'
const fecha = new Date()


class Ventas extends Component {
  

  constructor(){
      super()
      this.state = {
        ventas: [],
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


  eliminarVenta = (elementId) => {
    
    console.log('todos somos')

    request
      .delete(`${API_URL}/api/ventas/${elementId}`)
      .then(() => {
        console.log('registro eliminado')
        request
          .get(`${API_URL}/api/ventas`)
          .then((data) => {
              this.setState({
                ventas: data.body 
              })
          })
      })

      .catch(function(e){
        console.log(e)
      })
  }


  render() {
    let listClientes = this.state.clientes
    let nweLists = this.state.ventas.filter(word => word.cliente === formularioVenta.cliente.value );
  	
  
    return (
      <div>

        <div className='head__container'>
          <h1 className='titulo__componente'>Sistema de Gestión - Ventas</h1>
        </div>
        <div className='ventas'>
          
          <form name='formularioVenta' onSubmit={ (e) => { this.nuevaVenta(e)} } >
            <div className='ventas__separador'>
              <div>
                <h1  className='ventas__label'>Cliente</h1>
              </div>

              <div>
                <select  name='cliente' className='ventas__select ventas__clientes'>
                   <option value="PABLO BARCENAS">PABLO BARCENAS</option>
                   <option value="MARCO ANTONIO BARCENAS">MARCO ANTONIO BARCENAS</option>
                   <option value="GENARO MALDONADO">GENARO MALDONADO</option>
                   <option value="MIGUEL CORTINA">MIGUEL CORTINA</option>
                  <option value="JOSEFINA ORTIZ">JOSEFINA ORTIZ</option>
                </select>
              </div>
            </div>
            <div className='ventas__separador'>
              <section className='ventas__productos__cantidad'>
                <div className='ventas__flex__uno'>
                  <h1 className='ventas__label'>Producto</h1>
                  <select  name= 'producto' className=' ventas__productos'>
                    <option value="" disabled>Please select an item</option>
                    <option value="SILLA APILABLE">SILLA APILABLE</option>
                    <option value="SILLA BASTON">SILLA BASTON</option>
                    <option value="SILLA CENTURY">SILLA CENTURY</option>
                    <option value="SILLA COLONIAL">SILLA COLONIAL</option>
                  </select>
                </div>
                <div className='ventas__flex__dos'>
                  <h1 className='ventas__label ' >Cantidad</h1>
                  <input className='ventas__cantidad' type="number" name='cantidad'  />
                </div>
              </section>
            </div>  
              
              
            <div className='ventas__separador'>
              <div>
                <h1 className='ventas__label ' >Tipo de Pago</h1>
                <label className='titulo__radio' >Efectivo</label>
                <input className='ventas__radio' type="radio" value="1" name='tipo_pago' />
                <label className='titulo__radio'>Crédito</label>
                <input type="radio" value="0" name='tipo_pago' />
              </div>
            </div>
            <div className='ventas__separador'>  
              <div>
                 <input className='venta__boton' type="submit" value="Submit" />
              </div>
            </div>    
          </form>


          <div>
          <table class="blueTable">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Eliminar</th>
              </tr>
            </thead>
          <tbody> 
            
            { nweLists.map((items) =>{
            return<ListaProductos key={items.id} id={items.id} producto={items.producto} cantidad={items.cantidad} fn={ this.eliminarVenta }/>
            // return <ListaProductos cliente={items} fn={this.borrarItem} posicion={idArray} />
            })
          }
          </tbody> 
          </table>
          </div>

        </div>
    </div>    
  	);
  }
}



export default Ventas;

