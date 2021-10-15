import "./App.css";
import LeftNav from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
import Login from "./components/login";
import Register from "./components/register"
import AddItems from "./components/AddItems";
import Adminheader from "./components/AdminHeader"


function App() {
  return (
    <div className="App">
      
      <Router>
     <Adminheader/>
      {/* <LeftNav/> */}

        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={AddItems} />
            <Route path="/item" exact={true} component={AddItems} />
           
              <Route exact path = "/register" component = {Register}/>
              <Route exact path="/login" component = {Login}/>
              
            </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
