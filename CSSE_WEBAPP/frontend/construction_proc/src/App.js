import "./App.css";
// import Sidebar from "./components/sidebar";
import HeaderComponent from "./components/AdminHeader";
import LeftNav from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      
      <Router>
      <HeaderComponent/>
      <LeftNav/>
  {/* <Sidebar/> */}
        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
