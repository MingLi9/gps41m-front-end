import React, { Component } from 'react'
/*
after page is made, create functions to call to the backend to complete the purchase and send the information to the database
import CartService from '../../services/CartService';
*/
class CartComponent extends Component{
constructor(props) {
    super(props);
    this.state = {
    Products: []
    };
  }

  componentDidMount(){
    //get products
    //foreach in the redux store
    // foreach(item in redux.store.shoppingcart.ids){
    //     ProductService.getProductById(this.state.id).then( res => {
    //     this.setState({product: res.data});
    //     })
    // }

    //load products in the form

  }

  sendForm(){
    
  }

  render() {
    return (
        <table className = "table table-striped table-bordered">

        <thead>
            <tr>
                <th> Productname</th>
                <th> ammount</th>
                <th> Price</th>
            </tr>
        </thead>
        <tbody>
            {/* {
                this.state.products.map(
                    product => 
                    <tr key = {product.id}>
                         <td> {product.name} </td>
                         <td> ammount</td>
                         <td> {product.price} </td>
                    </tr>
                )
            } */}
        </tbody>
    </table>
    );
  };
}
export default CartComponent