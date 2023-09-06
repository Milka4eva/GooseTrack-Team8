import styled from 'styled-components';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: scroll;
`

export const Overlay = styled.div`
     z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const ModalWindow = styled.div`
    width: 303px;  
      height: 336px; 
    position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);    
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: ${({ theme }) => theme.bgColors.modalBg};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  border-radius: 8px;   
 


  @media (min-width: 375px){
    width: 396px;  
      height: 360px; 
  }

`