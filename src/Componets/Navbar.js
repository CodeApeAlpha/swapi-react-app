// import {Link} from 'react-router-dom';

const NavBar = () => {
  return (

    <div className="navbar row bg-dark ">
    {/* Col 1 */}
      <div className="col-lg-3 col-md-8 col-sm-9 col-xs-9 d-flex justify-content-center ">
        <div className="row  m-1 ">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex justify-content-start ">
                <button type="button" className=" btn btn-sm btn-secondary ">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFFF" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12V9.5C10 9.10218 9.84196 8.72064 9.56066 8.43934C9.27936 8.15804 8.89782 8 8.5 8V8C8.10218 8 7.72064 8.15804 7.43934 8.43934C7.15804 8.72064 7 9.10218 7 9.5V13C7.05225 13.501 7.21362 13.9844 7.47277 14.4163C7.73192 14.8483 8.08255 15.2181 8.5 15.5H12L13.348 11.008C13.4473 10.6749 13.4587 10.3218 13.381 9.983L12.181 4.774C12.0663 4.27665 11.7658 3.84198 11.341 3.559L10.5 3" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.5 6.5V0.5H2.5V11.5H4.5" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    All Cards
                </button>
            </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6  d-flex justify-content-start">
            <button type="button" className="btn btn-sm btn-secondary ">
              <svg  width="16" height="16" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.5L15.5 6L8 10.5L0.5 6L8 1.5Z" stroke="#3B3B3B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 9.09998L15.5 9.99998L8 14.5L0.5 9.99998L2 9.09998" stroke="#3B3B3B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Decks
            </button>
          </div>
      
        </div>
      </div>
      <div className="col-lg-6 d-none d-xl-block col-6 ">
          <div className="d-flex justify-content-center text-white ">
             <p>
             SW-API Deck Builder
             </p> 
          </div>
    </div>
    <div className=" col-lg-3 col-md-4 col-sm-3 col-xs-3">
      <div className="d-flex justify-content-center ">
          <button type="button" className="btn btn-sm btn-success ">Kemani Young</button>
        </div>
      </div>
    </div>
   

    // <nav class="w-100">
    // <div className="bg-dark row">
    // {/* Col 1 */}
    //     <div className=" col-lg-6 bg-light p-2">
    //       <section>
    //       <div className="row" >
    //           <div className="col-6 bg-danger">
    //             <div className="d-flex justify-content-center w-100 ">
                  // <button type="button" className=" btn btn-sm btn-secondary ">
                  //   <svg width="16" height="16" viewBox="0 0 16 16" fill="#6c757d" xmlns="http://www.w3.org/2000/svg">
                  //   <path d="M10 12V9.5C10 9.10218 9.84196 8.72064 9.56066 8.43934C9.27936 8.15804 8.89782 8 8.5 8V8C8.10218 8 7.72064 8.15804 7.43934 8.43934C7.15804 8.72064 7 9.10218 7 9.5V13C7.05225 13.501 7.21362 13.9844 7.47277 14.4163C7.73192 14.8483 8.08255 15.2181 8.5 15.5H12L13.348 11.008C13.4473 10.6749 13.4587 10.3218 13.381 9.983L12.181 4.774C12.0663 4.27665 11.7658 3.84198 11.341 3.559L10.5 3" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
                  //   <path d="M10.5 6.5V0.5H2.5V11.5H4.5" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
                  //   </svg>
                  // All Cards
                  // </button>
    //             </div>
    //           </div>
    //           <div className="col-6 bg-warning">
    //             <div className="d-flex justify-content-center ">
                  // <button type="button" className="btn btn-sm btn-secondary  ">
                  //   <svg  width="16" height="16" viewBox="0 0 16 16" fill="#6c757d" xmlns="http://www.w3.org/2000/svg">
                  //   <path d="M8 1.5L15.5 6L8 10.5L0.5 6L8 1.5Z" stroke="#3B3B3B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  //   <path d="M14 9.09998L15.5 9.99998L8 14.5L0.5 9.99998L2 9.09998" stroke="#3B3B3B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  //   </svg>
                  //   Decks
                  // </button>
    //             </div>

    //           </div>
    //         </div>
    //       </section>
          
    //     </div>

    // {/* Col 2 */}
    //     <div className=" bg-primary col-4 d-none  d-xl-block  p-2">
    //       <div className="d-flex justify-content-center ">
    //         SW-API Deck Builder
    //       </div>
    //     </div>
    // {/* Col 3 */}
    //     <div className="bg-info col-sm-3 col-lg-3 col-md-3 p-2">
    //     <div className="d-flex justify-content-center ">
    //         <button type="button" className="btn btn-sm btn-success"> Kemani Young</button>
    //       </div>
    //     </div>
    // </div>
    // </nav>
  );
};

export default NavBar;
