import axios from "axios";
import {useState,useEffect } from "react";

const useGetStarShip  = () => {
    const [starShip, setStartShip] = useState([]);
    const [url, setUrl] = useState("https://www.swapi.tech/api/starships");  
    useEffect(()=>{
        axios.get(url).then((res) => {
            console.log(res.data);
            setStartShip(starShip=>[...starShip,res.data.results]);
        if(res.data.next!=null){
            setUrl(res.data.next);
        }
        })
        .catch((error)=>{
            console.log(error);
        });
    },[url])
    
    return {starShip}
}
 
export default useGetStarShip;