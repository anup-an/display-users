import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import User from '../User';
const Router = ({users}) => {
    return (
        <Switch>
            <Route exact path="/">
                <Home users={users}/>
            </Route>
            <Route path="/users/:id">
                <User />
            </Route>
            <Route>
                <div className="flex h-screen items-center justify-center">
                <h1 className="text-3xl">Page not found</h1>
                </div>
            </Route>
        </Switch>
    )
}

export default Router;