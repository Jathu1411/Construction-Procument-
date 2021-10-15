import React, { Component } from "react";

export default class LeftNav extends Component {
  render() {
    return (
      <div>
        <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow" style={{backgroundColor:"rgb(19, 150, 155)"}}>
         <div style={{backgroundColor:"Black",height:"67px",width:"255px",color:"white",textAlign:"center",fontSize:"20px"}}>
            R & R CONSTRUCTIONS
         </div>
           
        </header>

        <div className="container-fluid">
          <div className="row">
            <nav
           
              id="sidebarMenu"
              class="col-md-3 col-lg-2 d-md-block sidebar collapse"
              style={{backgroundColor:"rgb(19, 150, 155)",textAlign:"center",borderStartEndRadius:"20px",height:"620px"}}
            >
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <br></br>
                  <li className="nav-item">
                    <a
                    style={{color:"White",fontSize:"18px"}}
                      className="nav-link active"
                      aria-current="page"
                      href="/Dashboard"
                    >
                      <span data-feather="home"></span>
                      Dashboard
                    </a>
                  </li>
                  <br></br>
                  <li className="nav-item">
                    <a  style={{color:"White",fontSize:"18px"}}
                    className="nav-link" href="/item">
                      <span data-feather="file"></span>
                     Items
                    </a>
                  </li>
                  <br></br>
                  <li className="nav-item">
                    <a  style={{color:"White",fontSize:"18px"}}
                    className="nav-link" href="/Assets">
                      <span data-feather="file"></span>
                      Requirements
                    </a>
                  </li>
                  <br></br>
                  <li className="nav-item">
                    <a  style={{color:"White",fontSize:"18px"}}
                     className="nav-link" href="/Reports">
                      <span data-feather="shopping-cart"></span>
                      Orders
                    </a>
                  </li>
                  <br></br>
                  <li className="nav-item">
                    <a  style={{color:"White",fontSize:"18px"}}
                    className="nav-link" href="/Users">
                      <span data-feather="layers"></span>
                     Returns
                    </a>
                  </li>
                  <br></br>
                  <li className="nav-item">
                    <a  style={{color:"White",fontSize:"18px"}}
                    className="nav-link" href="/Users">
                      <span data-feather="layers"></span>
                     Inquires
                    </a>
                  </li>

            
                 
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
