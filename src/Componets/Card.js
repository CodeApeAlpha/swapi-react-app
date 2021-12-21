import { useState,useEffect } from "react";

const Card = ({cardData}) => {

  return (
    
    <div className="row mt-4" >
    {
     

      cardData.map((value,index_1)=>(
     
         
          <div key={index_1} className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-4">
            <div className="card" >
              <div  className="card-header  ">
                <h3>{value.name}</h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{value.url}</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
          </div>
        </div>
       
      ))
    }
    </div>
  )
};

export default Card;
