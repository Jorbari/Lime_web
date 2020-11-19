import React from "react";

const Spinner = (props) => {
  
  
    return (
        <>

            {
                props.showSpinner ? (
                    <div class="spinner-border" role="status" >
                    <span class="sr-only">Loading...</span>
               </div>
                ) : ''
            }
           

        </>
    );
}

export default Spinner;