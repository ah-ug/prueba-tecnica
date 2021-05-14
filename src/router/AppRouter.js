import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { Home } from "../components/home/Home";

// TODO: Implementar rutas privadas y publicas.
// import { PrivateRoute } from "./PrivateRoute";
// import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginScreen />
                </Route>
                <Route exact path="/register">
                    <RegisterScreen />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}