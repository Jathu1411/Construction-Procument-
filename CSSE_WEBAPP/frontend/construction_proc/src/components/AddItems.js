import React, { Component } from 'react';
import axios from "axios";


class AddItems extends Component {

    constructor(props){
        super();
        this.state = {
            name: "",
            quantity: "",
            price: "",
            description: "",
            users: []
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangPrice = this.onChangPrice.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(e) {
        this.setState({ name: e.target.value})
    }
    onChangeQuantity(e) {
        this.setState({ quantity: e.target.value})
    }
    onChangPrice(e) {
        this.setState({ price: e.target.value})
    }
    onChangeDescription(e) {
        this.setState({ description: e.target.value})
    }
   

    onSubmit(e) {
        e.preventDefault();
        const item = {
            name: this.state.name,
            quantity: this.state.quantity,
            price: this.state.price,
            description: this.state.description,
        }

      

        axios.post('http://localhost:8085/item/items', item)
            .then(res => console.log(res.data));
       alert("sucess");
        this.setState({
            name: '',
            quantity: '',
            price: '',
            description: '',

        })
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Item Name: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default AddItems;