import { useState } from "react";
import React, { lazy } from "react";

const MusicConatiner = lazy(() => import("./MusicContainer"));
const Header = lazy(() => import("remoteComponents/Header"));

function App() {
  return (
    <div className="App">
      <Header title={"Best songs"} />
      <MusicConatiner />
    </div>
  );
}

export default App;
