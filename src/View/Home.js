// Components 
import Card from "../Componets/Card";
import Navbar from "../Componets/Navbar";
import Filter from "../Componets/Filter";
import  BreadCrumb from "../Componets/BreadCrumb";
import  PlanetCard from "../Componets/PlanetCard";

// Custom Hook

import {useFetch} from "react-async"
import {useEffect, useState} from "react"


const Planets=()=>{

  const [people,setPeople]=useState([])
  const [url,setUrl]=useState("https://www.swapi.tech/api/people");
  const {data,error}= useFetch(url,{
    headers:{accept:"application/json"}
  });

  useEffect(()=>[
    setPeople(people=>[...people,{name:data.name}])
  ],[url])
  if(error) return error.message
  if(data){
    console.log(data);
    return (
      <ul>
        {
          data.results.map((element)=>{
            return (
                <li><PlanetCard planet={element}/></li>
            );
          })
        }
      </ul>
    );
  
  }
   
  return "default"

}

const Home = () => {
  
  
  return (
    <div className="w-100">
      <Navbar></Navbar>
      <div className="container">
      <BreadCrumb></BreadCrumb>
      <Filter></Filter>
      <Planets/>
      </div>
    </div>
  );
};

export default Home;


