import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "../screens/Login";
import "fontsource-roboto";
import "../../css/app.css";
import MainScreen from "../screens/Main";
import ProtectedRoute from "./ProtectedRoute";

const bodyStyle = {
    backgroundColor: "#f9e981",
};

function App() {
    return (
        <div style={bodyStyle}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LoginScreen></LoginScreen>
                    </Route>
                    <ProtectedRoute exact path="/main" component={MainScreen} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById("example")) {
    ReactDOM.render(<App />, document.getElementById("example"));
}
