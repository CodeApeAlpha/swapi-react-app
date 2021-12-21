import { useState,useEffect } from "react";

const PlanetCard = ({planet}) => {

  return (
    
    <div className="row mt-4" >
    {
      <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-4">
        <div className="card" >
          <div  className="card-header  ">
            <h3>{planet.name}</h3>
          </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{planet.url}</li>
            </ul>
        </div>
      </div>
    }
    </div>
  )
};

export default PlanetCard;
