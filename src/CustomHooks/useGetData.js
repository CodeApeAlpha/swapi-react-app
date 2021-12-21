// import axios from "axios";

import axios from "./Base/axios"
import {useState,useEffect } from "react";



const  useGetData = (fetchUrl)=>{    
    
    const [response, setResponse] = useState([]);
    const [url, setUrl] = useState(fetchUrl);  
    useEffect(()=>{
        
        async function getPeopleData(){
           const request= await axios.get(url);
           if(request.data.next!==null&&request.data.next!==undefined){
                request.data.results.forEach((Array,index)=>{
                    setResponse(response=>[...response,Array])
                })
                setUrl(request.data.next);
            }
            if(request.data.result!==undefined){
                setResponse(request.data.result.properties)
            }
        }
        getPeopleData();

    },[url])
    
    return {response}
};
 
export default useGetData;