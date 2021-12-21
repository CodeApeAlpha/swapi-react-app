import axios from "axios";
import {useState,useEffect } from "react";

const useGetSpecies = (url) => {
    const [spices, setSpices] = useState([]);
    useEffect(()=>{
        axios.get(url).then((res) => {
            setSpices(res.data.result.properties);
            if(res.data.next!=null){
                url=res.data.next;
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    },[url])
    
    return {spices}
}
 
export default useGetSpecies;