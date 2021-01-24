import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import HomeScreen from "../srceens/HomeScreen";
import TvScreen from "../srceens/TvScreen";
import SearchScreen from "../srceens/SearchScreen";

export default () => (
    <Router>
        <Switch>

            <Route path={"/"} exact component={HomeScreen} />
            <Route path={"/tv"} exact component={TvScreen} />
            <Route path={"/search"} exact component={SearchScreen} />
            <Redirect from={"*"} to={"/"} />
        </Switch>
    </Router>
)



