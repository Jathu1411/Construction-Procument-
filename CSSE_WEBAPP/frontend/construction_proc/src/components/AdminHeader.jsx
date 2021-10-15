import React from "react";



import { Link } from "react-router-dom";



const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg"  style={{backgroundColor:"rgb(19, 150, 155)"}}>
       

        

        <Link className="navbar-brand" to="/">
         R & R Constructions
        </Link>

        <div className="collapse navbar-collapse">
          <br></br>

          <ul className="navbar-nav">
            <li></li>

            <li></li>

            <li className="navbar-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>

            <br></br>

            <li className="navbar-item">
              <Link to="/Fdash"className="nav-link">ADD ITEMS</Link>
            </li>

            <br></br>

            <li className="navbar-item">
              <Link to="/venues" className="nav-link">VIEW ITEMS</Link>
            </li>

            <br></br>

            <li className="navbar-item">
              <Link to="/AddRoom" className="nav-link">
                REQUIREMENT
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/status" className="nav-link">
                ORDER
              </Link>
            </li>

            <br></br>

            <li className="navbar-item">
              <Link to="/getemployees" className="nav-link">
                RETURN
              </Link>
            </li>

            <br></br>

            <li className="navbar-item">
              <Link to="/ViewExpense" className="nav-link">INQUIRE</Link>
            </li>
            {/* <div style={{textAlign:"right"}}>
             <button onClick = {( ) => {
                         localStorage.clear();
                         props.history.push('/login');
                         }} className = "btn btn-secondary">Logout</button>
         </div>     */}
           
            <br></br>

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;