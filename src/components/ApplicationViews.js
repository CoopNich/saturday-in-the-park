import { Route, Redirect } from "react-router-dom";
import React from "react";
import AreaList from "./areas/AreaList"

const ApplicationViews = props => {
    // const hasUser = props.hasUser;
    // const setUser = props.setUser;

    return (
        <>
            <Route exact path="/"
                render={props => {
                    return <Redirect to="/areas" />;
                }}
            />
            <Route exact path="/areas"
                render={props => {
                    return <AreaList {...props}/>;
                }}
            />

        </>


    )
}
export default ApplicationViews;