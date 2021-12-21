import axios from "axios";
import {useState,useEffect } from "react";
const useGetVehicles = () => {
    
    const [vehicles, setVehicles] = useState([]);
    const [url, setUrl] = useState("https://www.swapi.tech/api/vehicles");  
    useEffect(()=>{
        axios.get(url).then((res) => {
            console.log(res.data);
            setVehicles(vehicles=>[...vehicles,res.data.results]);
            if(res.data.next!=null){
                setUrl(res.data.next);
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    },[url])
    
    return {vehicles}

}
 
export default useGetVehicles;