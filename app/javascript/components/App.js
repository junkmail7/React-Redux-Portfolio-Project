import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Tricks from './Tricks/Tricks'
import Trick from './Trick/Trick'
import Home from './Home/Home'
import User from './Users/User'
import UserTricks from './Users/UserTricks'


const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin" component={User}/>
            <Route exact path="/log" component={UserTricks}/>
            <Route exact path="/tricks" component={Tricks}/>
            <Route exact path="/tricks/:id" component={Trick}/>   
        </Switch>
    )
}

export default App