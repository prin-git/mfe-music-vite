

import {useDetails} from 'remoteComponents/store'

const  Detail=(props)=> {
  const [details, setDetails] = useDetails()
  {console.log("DFDF",details.url)}
  return (
<div className="detail" >

<img src={details.url} alt={details.song} className='picture'/>
 
    
      <div >Release:<span>{details.released}</span>
</div>
      <div >Writer:<span>{details.writer
}</span></div>

      </div>
  );
}

export default Detail;
