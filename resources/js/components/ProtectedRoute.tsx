import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import Auth from "../auth";

const ProtectedRoute: React.FC<RouteProps> = ({
    component: Component,
    ...rest
}) => {
    if (!Component) return null;
    return (
        <Route
            {...rest}
            render={(props) => {
                if (Auth.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location },
                            }}
                        />
                    );
                }
            }}
        ></Route>
    );
};

export default ProtectedRoute;
