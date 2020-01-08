import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import MadLib from '../src/Components/MadLib/madLib';

export default function routes(){
    return(
        <Switch>
            <Route exact path ='/' component={App} />
            <Route path ='/madLib' component={MadLib} />
        </Switch>
    )
}