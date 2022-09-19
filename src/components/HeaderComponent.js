import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "../stylesheets/HeaderStyling.css";
import {connect} from 'react-redux';
import {getItemsCountCar} from '../actions/getAction';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render(props) {
        console.log(this.props);

        return (
            <span className="HeaderStyling">
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <ul className="menu">
                            <li><Link to="/" className="title">Product Management</Link></li>
                            <li><Link to="/login" className="title">Login</Link></li>
                            <li><Link to="/userdetails" className="title">userdetails</Link></li>
                            <li><Link to="/" className="title">products</Link></li>
                            <li><Link to="/products" className="title">products</Link></li>
                            <li><Link to="/shoppingcart" className="title">Cart {this.props.shoppingcartProps.shoppingcartNumbers}</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
            </span>
            
        )
    }
}

const mapStateToProps = state => ({
    shoppingcartProps: state.shoppingcartState
})

export default connect(mapStateToProps, {getItemsCountCar}) (HeaderComponent)
