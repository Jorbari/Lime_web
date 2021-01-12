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
                        <div class="spinner-border" role="status" style = {{width: props.radius, height: props.radius}}>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </SpinnerContainer>
                ) : ''
            }
           

        </> 
    );
}

export default Spinner;