import styled from 'styled-components';



import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';


export const FeedbackFormContainer = styled.div`
border-radius: 8px;
border: 1px solid rgba(220, 227, 229, 0.80);
      position: fixed;
top: 15%;
left: 5%;
width: 335px;
  z-index: 10;
box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);

  background-color: #FFF;
   padding: 28px 20px; 

  @media screen and (min-width: 768px) {
    padding: 8px 32px 32px 32px;
    width: 468px;
    left: 30%;
  } 
    @media screen and (min-width: 1440px) {
top: 80px;
left: 45%;
  } 
`;

export const Form = styled(FormikForm)`
  gap: 5px;
  background-color:#FFFFFF;
  @media screen and (min-width: 768px) {
    width: 404px;
  }

`;

export const Title = styled.p`
 color: rgba(52, 52, 52, 0.80);
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 14px; 
margin-top:26px;

`;
export const IconClose = styled.svg`
    position: relative;
    left: 97%;
width:24px;
height: 24px;
`;
export const FormField = styled.label`
  margin-bottom: 0;
`;

export const StarsField = styled.div`
  margin-bottom: 20px;
`;

export const TextareaField = styled(FormikField)`
  width: 100%;
  height: 130px;
  padding: 12px 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
margin-top:8px;
  background: #F6F6F6;
  border-radius: 8px;
  color: #343434;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px;
  resize: none;

  ::placeholder {
    color: #343434;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px;
  }

  :focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 127px;
    padding: 14px 18px;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: #ggg;
  font-weight: 500;
  font-size: 10px;
`;

export const RatingBtnOverlay = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 14px;
  
`;

export const SaveFeedbackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  margin: 0;

 font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px;
  letter-spacing: -0.02em;
  line-height: 1.33;
  background: #E5EDFA;
color: #343434;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
   background: #3E85F3;
      color: #FFF;
       box-shadow:  #3E85F3;
  }
`;

export const CancelFeedbackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  margim-bottom:
 font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px;
  color: #343434;
  background: #E5EDFA;
 border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
    background:  #3E85F3;
color: #FFF;
  box-shadow:  #3E85F3;
  }
`;

export const EditFeedbackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  margin: 0;
color: #FFF;
text-align: center;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px;
  letter-spacing: -0.02em;
  line-height: 1.33;

  background: #3E85F3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
   background: #E5EDFA;
    color: #343434;
  }
`;

export const EditButtonContainer = styled.div`
  height: 30px;
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
  align-items: baseline;
`;

export const ButtonStar = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &.on {
  color: #FFAC33;
}
&.off {
  color: #CEC9C1;
}
}`;
export const ButtonDiv = styled.div`
  display: flex;
 justify-content: flex-end;
  gap: 5px;
`;

export const Pensil = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height:30px;
  padding: 5px;
  border-radius: 50%;
  stroke: #3E85F3;
  background: #DCEBF7;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #3E85F3;
      stroke: #FFF;
  }
`;

export const Trash = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
  background: #FFD2DD;
  stroke: #EA3D65;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #ea3d65;
      stroke: #FFF;
  }
`;



