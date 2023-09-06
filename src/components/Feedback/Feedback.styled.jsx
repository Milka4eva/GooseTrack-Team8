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

  background-color:  ${({ theme }) => theme.bgColors.modalBg};
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
  background-color: ${({ theme }) => theme.bgColors.modalBg};
  @media screen and (min-width: 768px) {
    width: 404px;
  }

`;

export const Title = styled.p`
 color:  ${({ theme }) => theme.textColors.modalLabel};
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 1,1; 
margin-top:26px;

`;
export const IconClose = styled.svg`
    position: relative;
    left: 97%;
width:24px;
height: 24px;
stroke: ${({ theme }) => theme.feedbackCancelBtn.textColor};
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
  border: 1px solid ${({ theme }) => theme.borderColors.calendar};
margin-top:8px;
  background:  ${({ theme }) => theme.bgColors.modalInputBg};
  border-radius: 8px;
  color: ${({ theme }) => theme.textColors.modalText};
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
  background:${({ theme }) => theme.notChangedcolors.accentColor};
color: ${({ theme }) => theme.notChangedcolors.textBtnColor};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
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
  color:${({ theme }) => theme.feedbackCancelBtn.textColor};
  background:  ${({ theme }) => theme.feedbackCancelBtn.bgColor};
 border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
   
 box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
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
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const EditButtonContainer = styled.div`
  height: 30px;
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
  align-items: baseline;
`;

export const ButtonStar = styled.svg`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 8px;
  width: 24px;
  height: 24px;
  &.on {
  stroke: #FFAC33;
  fill:   #FFAC33;
}
&.off {
  stroke: #CEC9C1;
  fill: #CEC9C1;
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
  background:  ${({ theme }) => theme.feedbackCancelBtn.bgColorBtnPenc};
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
  background:  ${({ theme }) => theme.feedbackCancelBtn.bgColorBtnTrash};
  stroke: #EA3D65;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.notChangedcolors.highPriorColor};
      stroke: #FFF;
  }
`;



