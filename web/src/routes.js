import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import Login from './pages/login';
import SignUp from './pages/signUp';
import Calendar from './pages/calendar';

const Routes = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <PrivateRoute path="/calendar" component={Calendar}></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;