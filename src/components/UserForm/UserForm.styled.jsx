import styled from 'styled-components';
import { ReactComponent as Avatar } from '../../images/avatar.svg';
import { ReactComponent as Cross } from '../../images/cross.svg';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledDataPicker = styled(DatePicker)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;

  max-width: 375px;
  height: 34px;

  padding-left: 14px;
  padding-right: 14px;
  outline: none;

  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.15);
  color: ${props => (props.selected ? 'black' : 'rgba(17, 17, 17, 0.1)')};

  border-color: ${props =>
    !props.isTouched
      ? 'rgba(17, 17, 17, 0.15)'
      : props.hasError
      ? '#e74a3b'
      : '#3cbc81'};

  background-color: transparent;

  &::placeholder {
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    color: rgba(17, 17, 17, 0.15);
  }

  &:hover,
  &:focus {
    border: 1px solid #111111;
  }

  @media (min-width: 768px) {
    width: 318px;
    height: 36px;
  }
`;

export const Container = styled.div`
  max-width: 375px;
  padding-bottom: 40px;

  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: auto;
  margin-right: auto;

  /* background-color: #fff; */
  background-color: ${({ theme }) => theme.userProfile.bgColor};

  @media (min-width: 768px) {
    max-width: 100%;
    min-width: 768px;
    padding-bottom: 38px;
  }

  @media (min-width: 1440px) {
    max-width: 100%;
    padding-bottom: 32px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 59px;
  padding-bottom: 40px;
  padding-left: 18px;
  padding-right: 18px;

  /* background-color: #fff; // #21222C; */
  background-color: ${({ theme }) => theme.userProfile.bgColor};

  border-radius: 16px;

  @media (min-width: 768px) {
    align-items: center;
    padding-top: 40px;
  }

  @media (min-width: 1440px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  /* .InvalidInput {
    border: 1px solid #e74a3b;
  } */

  /* .CorrectInput {
    border: 1px solid #3cbc81;
     color: #3cbc81; 
  } */
`;

export const StyledAvatar = styled.div`
  width: 72px;
  height: 72px;
  position: absolute;
  left: calc(50% - 36px);
  top: -36px;
  fill: rgba(62, 133, 243, 0.18);
  background-color: white;
  border: 2px solid #3e85f3;

  border-radius: 50%;

  @media (min-width: 768px) {
    position: static;
    width: 124px;
    height: 124px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 50%;
  }
`;

export const AvatarDefault = styled(Avatar)`
  position: absolute;
  left: calc(50% - 25px);
  top: 5px;
  width: 50px;
  height: 50px;

  @media (min-width: 768px) {
    left: calc(50% - 47px);
    top: 45px;
    width: 95px;
    height: 95px;
  }

  @media (min-width: 1440px) {
    left: calc(50% - 47px);
    top: 65px;
    width: 95px;
    height: 95px;
  }
`;

export const Plus = styled(Cross)`
  position: absolute;
  left: 53%;
  top: 28px;
  width: 14px;
  height: 14px;
  font-size: 12px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 147px;
    left: 52%;
  }

  @media (min-width: 1440px) {
    top: 170px;
    left: 51%;
  }
`;

export const Heading = styled.div`
  font-family: Inter;
  font-weight: 700;
  font-size: 14px;
  /* color: #343434; */
  color: ${({ theme }) => theme.userProfile.userName};

  text-align: center;
`;

export const Title = styled.div`
  margin-top: 4px;
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  /* color: #343434; */
  color: ${({ theme }) => theme.userProfile.title};
`;

// Обгортка Inputs without avatar
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 1440px) {
    width: 758px;
    flex-direction: initial;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 24px;
  }
`;

// Обгортка Label та Input
export const WrapperInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 354px;
  }

  @media (min-width: 1440px) {
    width: 354px;
  }
`;

export const Label = styled.label`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
  line-height: 1.1;
  /* color: #111111; */
  color: ${({ theme }) => theme.userProfile.label};

  color: ${props =>
    !props.isTouched
      ? props.theme.userProfile.label
      : props.hasError
      ? props.theme.userProfile.labelHasError
      : props.theme.userProfile.labelHasOk};
`;

export const Input = styled.input`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  min-width: 250px;
  height: 42px;
  padding-left: 14px;
  padding-right: 14px;
  outline: none;

  border-radius: 8px;
  /* border: 1px solid rgba(17, 17, 17, 0.10); */
  border: ${({ theme }) => theme.userProfile.inputBorder};

  /* color: rgba(17, 17, 17, 0.1) */
  color: ${({ theme }) => theme.userProfile.inputText};

  ${props =>
    props.value &&
    `
    font-family: 'Inter';
    font-size: 14px;
    font-weight:600;
   
  `};

  border: ${props =>
    !props.isTouched
      ? props.theme.userProfile.inputBorder
      : props.hasError
      ? props.theme.userProfile.inputHasError
      : props.theme.userProfile.inputHasOk};

  /* .InvalidInput {
   
    border: 1px solid #e74a3b;
  }

  .CorrectInput {
    border: 1px solid #3cbc81;
  } */

  background-color: transparent;
  &::placeholder {
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    /* color: rgba(17, 17, 17, 0.15); */
    color: ${({ theme }) => theme.userProfile.inputPlaceholderColor};
  }
  &:hover,
  &:focus {
    border: 1px solid #111111;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    height: 46px;
  }
`;

export const ErrorMessage = styled.div`
  /* color: #da1414; */
  color: ${({ theme }) => theme.notChangedcolors.statusError};
  font-size: 12px;
  margin-top: 3px;
  margin-left: 8px;

  @media (min-width: 768px) {
    margin-top: 4px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 50px;
  padding-right: 50px;
  width: 195px;
  height: 46px;

  font-family: 'Inter';
  font-weight: 600;
  line-height: 1.25;
  font-size: 14px;

  text-align: center;

  /* color: #ffffff; */
  /* background-color: ${p => (p.disabled ? '#eaeaea' : '#3E85F3')}; */
  background-color: ${p =>
    p.disabled
      ? p.theme.userProfile.backgroundColorDisabledBtn
      : p.theme.userProfile.backgroundColorNotDisabledBtn};

  color: ${p =>
    p.disabled
      ? p.theme.userProfile.colorTextDisabledBtn
      : p.theme.userProfile.colorTextNotDisabledBtn};

  border-radius: 16px;
  border: none;

  cursor: ${p => (p.disabled ? 'default' : 'pointer')};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    /* color: #ffffff; */
    color: ${({ theme }) => theme.userProfile.textBtnColor};
    background-color: ${({ theme }) => theme.userProfile.hoverBtnColor};
  }

  @media (min-width: 768px) {
    width: 262px;
    height: 48px;
  }

  @media (min-width: 1440px) {
    margin-top: 88px;
  }
`;

export const Iconinput = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 28px;
  right: 18px;

  @media (min-width: 375px) {
    top: 30px;
  }

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
