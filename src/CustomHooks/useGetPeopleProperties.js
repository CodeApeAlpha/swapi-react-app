import axios from "axios";
import {useState,useEffect } from "react";



const useGetPeopleProperties=(url)=>{    
    
    const [properties, setProperties] = useState([]);
    useEffect(()=>{
        axios.get(url).then((res) => {

            // console.log(res.data);
        setProperties(res.data.result.properties);
        if(res.data.next!=null){
            url=res.data.next;
        }
        })
        .catch((error)=>{
            console.log(error);
        });
  
    },[url])
    
    return {properties}
};
 
export default useGetPeopleProperties;