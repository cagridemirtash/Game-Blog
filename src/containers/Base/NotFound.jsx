import React from 'react';
import { Link } from 'react-router-dom';


const Error = () =>{
    
    return(
        <>
     
        <div className="blog-page-area go-top">
              <div className="container">
                <div className="error-area-inner text-center">
                  <h2>404</h2>
                  <h3>Sorry, This Page Doesn't Exist.</h3>
                  <Link className="btn btn-base" to="/">Back To Homepage</Link>
                </div>
              </div>
            </div>
       
          </>  
            
    )


}

export default Error;