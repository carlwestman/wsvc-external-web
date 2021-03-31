import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './views/home'
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path={['/']} component={Home} />
    </Switch>
  );
}
