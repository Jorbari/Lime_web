import React from "react";
import styled from 'styled-components'
const Spinner = (props) => {
  
    const SpinnerContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
     `
    return (
        <>

            {
                props.showSpinner ? (
                    <SpinnerContainer>
                        <div className="spinner-border" role="status" style = {{width: props.radius, height: props.radius}}>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </SpinnerContainer>
                ) : ''
            }
           

        </> 
    );
}

export default Spinner;