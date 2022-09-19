import React, { Component } from 'react'
import ProductService from '../../services/ProductService';

class CreateProductComponent extends Component {
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
        this.handleChange = this.handleChange.bind(this)
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {name: this.state.name,
            price: this.state.price,
            description : this.state.description,
            type: this.state.type,
            producer: this.state.producer
        };
        console.log('product => ' + JSON.stringify(product));

        // step 5
        if(this.state.id === '_add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state.id).then( res => {
                this.props.history.push('/products');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Productname: </label>
                                            <input placeholder="Productname" name="name" className="form-control" 
                                                defaultValue={this.state.name} onChange={this.handleChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.handleChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.handleChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Type: </label>
                                            <input placeholder="Type" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.handleChange}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
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
export default CreateProductComponent
