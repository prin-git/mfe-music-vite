
import React, { lazy} from 'react';



const List= lazy(() => import('remoteComponents/MusicList'));
const Detail= lazy(() => import('remoteDetail/Detail'));
 import {useDetails} from  "remoteComponents/store"



function App() {

    const [detail]=useDetails()
  return (<>
    <h3>{detail.song}</h3> 
    <div className="musicWrap">
   
<Detail/>

<List/>
     
    </div>
    </>
  );
}

export default App;