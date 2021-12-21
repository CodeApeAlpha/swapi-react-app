import { useState,useEffect } from "react";
import useGetData from "./useGetData"
import axios from "./Base/axios"


const useCardBuilder = () => {

    const [card,setCard]=useState([])
    const {response:response_people}=useGetData("/people");

    async function getPeopleData(url){

        return await axios.get(url);
    }
    response_people.map((response_people)=>{

        
    })
  
    return {card}
}
 
export default useCardBuilder;