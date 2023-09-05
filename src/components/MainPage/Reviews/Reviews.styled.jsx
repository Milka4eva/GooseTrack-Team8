import styled from "styled-components";

export const ReviewConteiner = styled.section`
    display: block;
    margin-bottom: 64px;
    margin-left: auto;
    margin-right: auto;

    width: 375px;
    
    @media (min-width: 768px) {
        margin-bottom: 100px;
        width: 580px;
    }

    @media (min-width: 1440px) {

        margin-bottom: 118px;
        width: 1184px;
         
    }
` 

export const ReviewTitel = styled.h2`
    display: block;
    text-align: center;

    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.15;

    color: #3E85F3;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 40px;
        line-height: 1.1;
    }

`

export const ReviewImgConteiner = styled.div`
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;

    width: 100%;
    height: 200px;

    overflow: hidden;

    @media (min-width: 768px) {
        margin-top: 50px;
        height: 190px;
    }

    

    & > div {
        display: flex;
        height: 100%;

        transition: translate;
        transition-property: transform;
        transition-duration: 300ms;
        transition-timing-function: ease-in-out;

        @media (min-width: 1440px) {
            gap: 24px;
        }
    }
`

export const ReviewButtonConteiner = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;

    margin-top: 8px;

    svg {
        display: block;
        width: 50px;
        height: 50px;

        cursor: pointer;
        transition: filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover, :focus {
            filter: drop-shadow(4px 2px 16px rgba(136, 165, 191, 0.48)); 
        }
    }

    @media (min-width: 768px) {
        margin-top: 18px;

        & svg {
            width: 61px;
            height: 61px;
        }
    }

    @media (min-width: 1440px) {
        margin-top: 32px;
    }
`