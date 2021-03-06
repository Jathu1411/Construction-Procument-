import React from "react";


import css from '../Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "../Database/FirebaseConfig";
import LoginState from "../Config/LoginState";

class App extends React.Component
{

    constructor(props) {
        super(props);

        this.state = {
            productsList : [],
            isLoading : true
        };


    }
    componentDidMount() {
        this.getProductsList();
    }

    render() {




        const listItems = this.state.productsList.map(item => {

            return (


                <div className="container card_container">
                    <div className="row">
                        <div className="col">
                            <img className="productImage" src={item.imageLink}/>
                        </div>
                        <div className="col card_body">
                            <div className="card-body">
                                <h5 className="card-title">{item.product}</h5>
                                <p className="card-text">{"Measuring Unit - " + item.unit}</p>
                                <p className="card-text">{"Type - " + item.type}</p>
                                <p className="card-text">{"Current Price - " + item.currentPrice + " LKR"}</p>
                                <p className="card-text">{"Expensiveness - " + item.expensiveness}</p>
                                <p className="card-text">{"Status - " + item.status}</p>
                                {
                                    item.status === "Restricted" && (
                                        <a className="btn btn-danger" onClick={() => this.updateproductItem(item.productId,"Not Restricted")}>UnRestrict</a>
                                    )
                                }
                                {
                                    item.status === "Not Restricted" && (
                                        <a className="btn btn-danger" onClick={() => this.updateproductItem(item.productId,"Restricted")}>Restrict</a>
                                    )
                                }
                                {
                                    <a className="btn ml-2" style={{backgroundColor:"#4ce1e9"}} onClick={() => this.edit(item.productId)}>Edit</a>
                                }

                            </div>
                        </div>
                    </div>
                </div>





            )
        })



        return(
            <div>

                {this.state.isLoading && (
                    <div className="loading_screen">
                        <div className="loader"/>
                    </div>
                )}

                {!this.state.isLoading &&   <a className="btn add_suppliers_btn" style={{backgroundColor:"#484c4c", color:"white",width:"180px",fontSize:"20px"}} onClick={() => this.GoToAddProducts()}>Add Products</a>
                }

                {!this.state.isLoading &&  <div className="orders_container">{listItems}</div>
                }



            </div>


        );
    }

    getProductsList = () =>
    {
        const ref = firebase.database().ref("Companies").child(LoginState.getCompanyId()).child("Products");

        let list = [];
        list.push("hello");

        ref.once('value',(snapshot) => {

            const list = snapshot.val();
            let newList = [];
            for(let i in list)
            {
                newList.push(list[i]);
                this.setState({
                    productsList : newList,
                    isLoading : false
                });

            }
            if(snapshot.numChildren() === 0)
            {
                this.setState({
                    isLoading : false
                })
            }

        })
    }

    GoToAddProducts = () =>{
       window.location.href = "/products/add";
    }

    edit = (productId) =>
    {
        window.location.href = "/product/" + productId;
    }

    updateproductItem = (productId,status) =>{

        const ref = firebase.database().ref("Companies").child(LoginState.getCompanyId()).child("Products").child(productId).child("status");
        ref.set(status, function(error) {
            if (error)
            {
                alert("An error occurred!" + error.message);
            }
            else
            {
                window.location.href = '/products';
            }
        })

    }
}
export default App;