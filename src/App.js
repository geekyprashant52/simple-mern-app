import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Users from "./Components/UsersPage/Users";
import UserDetails from "./Components/UserDetails/UserDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/userdetails/:id" component={UserDetails}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
