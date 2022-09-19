import React, { Component } from 'react'
import ProductService from '../../services/ProductService';

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            price: '',
            description: '',
            type: '',
            producer: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( (res) =>{
            let product = res.data;
            this.setState({name: product.name,
                price: product.price,
                description : product.description,
                type: product.type,
                producer: product.producer
            });
        });
    }

    updateProduct = (e) => {
        e.preventDefault();
        let product = {name: this.state.name,
            price: this.state.price,
            description : this.state.description,
            type: this.state.type,
            producer: this.state.producer
        };
        console.log('product => ' + JSON.stringify(product));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProductService.updateProduct(product, this.state.id).then( res => {
            this.props.history.push('/products');
        });
    }
    
    handleChange(event){
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      }

    cancel(){
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Productname: </label>
                                            <input name="productname" className="form-control" 
                                                value={this.state.name} onChange={this.handleChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input  name="price" className="form-control" 
                                                value={this.state.price} onChange={this.handleChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input name="description" className="form-control" 
                                                value={this.state.description} onChange={this.handleChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Type: </label>
                                            <input name="type" className="form-control" 
                                                value={this.state.type} onChange={this.handleChange}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateProductComponent
