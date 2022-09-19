import React, { Component } from 'react'
import ProductService from '../../services/ProductService';
import "../../stylesheets/IndividualProductPage.css"

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }

    render() {
        return (
            <div className="card">
                <div className="photo">
                    {/*Can add custom picture here later if we decide to do that*/}
                    <img src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg" alt="#"></img>
                </div>
                <div className="description">
                <h2>{this.state.product.name}</h2>
                <h4>{this.state.product.type}</h4>
                <h1>${this.state.product.price}</h1>
                <p>{this.state.product.description}</p>
                {/*Buttons still need to be made working, will be done in a later stage*/}
                <button>Add to Cart</button>
                <button>Wishlist</button>
                </div>
            </div>
        )
    }
}

export default ViewProductComponent
