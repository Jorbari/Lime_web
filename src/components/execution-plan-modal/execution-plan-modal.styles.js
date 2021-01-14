import styled from 'styled-components';
import Modal from "react-bootstrap/Modal";
import CustomButton from '../custom-button/custom-button.component';

export const ModalContainer = styled(Modal)`
   display: flex;

   & .modal-content {
      border-radius:40px;
      padding: 5rem 0;

      & .modal-header{border: none; width:80%; margin: auto auto 3rem auto; padding: 0; font-weight: 700;}

      & .modal-body{padding:0;width:80%}
   }

   & .modal-dialog {
    max-width: none;
    max-height: none;

    width: 60vw;
}
`
export const FormInput = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 5rem;
   width: 100%;

   & input, & input:focus{
       border: none;
       outline: none;
       border-bottom: 1px solid rgba(91, 86, 86, 0.5);
       font-size: 2rem;
       font-weight: 500;
   }

   & label, & label:focus{
     color: #5b5656;
     font-size: 1.8rem;
     font-weight: 300;
     margin-bottom: 0.8rem;
   }
`

export const FormGroupRow = styled.div`
     display: flex;

     & :not(:last-child){
         margin-right: 2rem;
     }
`

export const DoneButton = styled(CustomButton)`
    display: flex;
    margin: 0 auto;
`