import React from 'react';
import {Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";

const App = (props) => {
  console.log(props)
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" render={() => <Redirect to='/' />}></Route>
        <Route render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
