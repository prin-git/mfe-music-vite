import { useState } from "react";
import React, { lazy} from 'react';

const MusicConatiner= lazy(() => import('./MusicContainer'))
const Header = lazy(() => import('remoteComponents/Header'));
const List= lazy(() => import('remoteComponents/MusicList'));
 import useCount from  "remoteComponents/store"



function App() {

  return (
   
    <div className="App">
     
<Header title={"Best songs"}/>

<MusicConatiner />
     
    </div>
    
  );
}

export default App;
