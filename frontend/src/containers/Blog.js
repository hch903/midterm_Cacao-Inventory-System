import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import RawMaterial from "./RawMaterial/RawMaterial";
import ProcessRender from "./ProcessRender/ProcessRender";
import DataInput from "./DataInput";
import Search from "./Search/Search";
import Summary from "./Summary/Summary";


class Blog extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="background">
            <Switch>
              <Redirect path="/home" to="/" />
              <Redirect path="/data-input/:beans_category?/farm-to-Raw Material" to="/raw-material" />
              <Route exact path="/" component={Home}/>
              <Route exact path="/process" component={ProcessRender}/>
              <Route exact path="/raw-material" component={RawMaterial}/>
              <Route exact path="/search" component={Search}/>
              <Route exact path="/:category/search" component={Search}/>
              <Route exact path="/summary" component={Summary}/>
              <Route exact path="/data-input/:beans_category?/:input?-to-:output?/:process?" component={DataInput}/>
            </Switch>
          </div>
        </div>
      <Nav />  
      </>
    )
  }
}

export default Blog;