import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainPageConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100vh;

    background-color: #3E85F3;
`

export const MainPageGoose = styled.img`
    display: block;

    width: 142px;
    height: 142px;

    @media (min-width: 768px) {
        width: 150px;
        height: 150px;
    }

    @media (min-width: 1440px) {
        width: 150px;
        height: 150px;
    }

`
export const MainPageTitel = styled.h1`
    margin: 0;

    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 1;

    color: #FFF;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);


    @media (min-width: 768px) {
        font-size: 100px;
        line-height: 1.3; /* 130% */
    }

    @media (min-width: 1440px) {
        font-size: 120px;
        line-height: 1.25; /* 130% */
    }

    & > span {
        margin-left: -3px;
        margin-right: 3px;
        padding: 0;

        font-style: italic;
        line-height: 1.3;

        @media (min-width: 768px) {
            margin-left: -9px;
            margin-right: 5px;

            font-size: 100px;
        }

        @media (min-width: 1440px) {
            margin-left: -11px;

            font-size: 120px;
            line-height: 1.25; /* 130% */
        }
    }
`

export const MainPageButtonCont = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    gap: 16px;

    margin-top: 32px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 24px;

        margin-top: 40px;
    }

`

export const MainPageSingUp = styled(Link)`
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.17; /* 128.571% */
    
    text-decoration-line: underline;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
    color: #FFF;

    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 1.3;
    }

`

export const MainPageLogIn = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    width: 130px;
    height: 46px;

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.28;
    letter-spacing: -0.28px;

    color: #3E85F3;

    border-radius: 16px;
    background-color: #FFF;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    text-decoration: none;

    @media (min-width: 768px) {
        width: 120px;
        height: 50px;
    }
    
    & svg {
        display: block;
        width: 18px;
        height: 18px;

        color: currentColor;

        & use {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
`