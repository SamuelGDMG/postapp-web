import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignUp from '../pages/SignUp/index';
import SignIn from '../pages/SignIn/index';
import Home from '../pages/Home/index'

const Routes = () => (
    <Switch>
        <Route path="/" exact component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/home" component={Home}></Route>
    </Switch>
)

export default Routes