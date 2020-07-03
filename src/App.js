import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import LoginUseState from "./LoginUseState";
import { useSimpleHashRouter } from "./useSimpleHashRouter";

function App() {
  const CurrentRoute = useSimpleHashRouter({
    useState: LoginUseState,
  });
  return (
    <Fragment>
      {(!CurrentRoute && (
        <div className="App App-Column">
          <a href="#useState">useState</a>
          <br />
        </div>
      )) || <CurrentRoute />}
    </Fragment>
  );
}

export default App;
