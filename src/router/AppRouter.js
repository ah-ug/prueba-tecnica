import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { Home } from "../components/home/Home";

// TODO: Implementar rutas privadas y publicas.
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch])

    if (checking) {
        return ( <h5>Espere...</h5> );
    }
    return (
        <Router>
            <Switch>
                <PublicRoute
                    exact path="/login"
                    component={LoginScreen} 
                    isAuthenticated={ !!uid }
                />
                <PublicRoute 
                    exact path="/register"
                    component={RegisterScreen}
                    isAuthenticated={ !!uid } 
                />
                <PrivateRoute
                    path="/home"
                    component={Home}
                    isAuthenticated={!!uid}
                />
            </Switch>
        </Router>
    );
}