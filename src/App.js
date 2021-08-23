import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Form from "./Components/Form";
import Home from "./Components/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/addColoc">
            <Form />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
