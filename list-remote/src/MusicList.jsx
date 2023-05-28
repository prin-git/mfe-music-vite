import { useState } from "react";
import {data} from  './music-data.Js'
import {useDetails} from "./store";
export const MusicList = () => {
  const [musicItems, setMusicItems] = useState([...data]);
  const [details, setDetails] = useDetails();
  const getDetails=(i,music)=>{
let arr=[...musicItems]
let arrWithClass=[]
for(let j=0; j<musicItems.length; j++){

if(i===j){
  arr[j].class='active';

}else{ arr[j].class=''}
arrWithClass.push(arr[j])

}
setMusicItems([...arrWithClass])
    setDetails({...music})
  }
  return (
    <div>
     <ul>
     {musicItems.map ((song,i)=> <li key={song.id} onClick={()=> getDetails(i,song)} className={song.class}>
        {song.name}
      </li>)}
     
     </ul>
    {console.log("DETAILS",details)}
    </div>
  );
};

export default MusicList;
