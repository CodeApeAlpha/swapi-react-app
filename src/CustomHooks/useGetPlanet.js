import axios from "axios";
import {useState,useEffect } from "react";

const useGetPlanet  = (url) => {
    const [planet, setPlanet] = useState([]);
    useEffect(()=>{
        axios.get(url).then((res) => {
        setPlanet(res.data.result.properties);
        if(res.data.next!=null){
            url=res.data.next;
        }
        })
        .catch((error)=>{
            console.log(error);
        });
  
    },[url])
    
    return {planet}
}
 
export default useGetPlanet;