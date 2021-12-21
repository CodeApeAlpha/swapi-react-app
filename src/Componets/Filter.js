const Filter = () => {
  return (

    <div className=" row  w-100 ">
    {/* Search */}
      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12  mb-2 ">
            <div className="input-group">
                {/* Input */}
                <input className="form-control left-border-none" placeholder="Search" type="text" name="search"/>
                {/* Icon Btn */}
                <span className="input-group-addon transparent">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z" stroke="#3B3B3B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.4999 15.5L11.7419 11.742" stroke="#3B3B3B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
          </div>
      </div>
    {/* DropDown 1 */}
       <div className="col-lg-2 col-md-5 col-sm-5 col-xs-5  d-flex align-items-center mb-2 ">
                <div className="dropdown ">
                    <button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Home World
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Spices</a>
                        <a className="dropdown-item" href="#">Vechile Count</a>
                        <a className="dropdown-item" href="#">StarShip Count</a>
                        <a className="dropdown-item" href="#">Home World</a>
                    </div>
                </div>
      </div>
    {/* Radio Btn */}
    <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6   d-flex align-items-center mb-2  ">
          <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex justify-content-start">
                  <div className="form-check  ">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      ASC
                    </label>
                    
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex justify-content-start">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label className="form-check-label" for="flexRadioDefault2">
                    DESC
                  </label>
                </div>
              </div>
          </div> 
    </div>
   
    </div>
  );
};

export default Filter;
