import styled from "styled-components";

export const MainPageList = styled.ul`
    
    display: block;
    margin: 0;

    box-sizing: border-box;
    padding: 64px 20px;

    @media (min-width: 768px) {
        width: 768px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 1440px) {
        width: 1440px;
        margin-left: auto;
        margin-right: auto;

        flex-direction: row;
        padding: 64px 128px;
    }

    & li {
        display: flex;
        flex-direction: column;
        gap: 40px;

        &:not(:nth-child(1)) {
            margin-top: 64px;
        }

        @media (min-width: 768px) {
            &:nth-child(even) div:nth-child(1) {
                margin-left: auto;
            }
        }

        @media (min-width: 1440px) {
            flex-direction: row;
            gap: 228px;

            &:nth-child(even) {
                flex-direction: row-reverse;
            }

            &:nth-child(odd) div:nth-child(1){
            margin-left: auto;
        }

        &:nth-child(even) div:nth-child(1){
            margin-left: 0;
            margin-right: auto;
        }

           
        }
    }
`

export const MainPageTextConteiner = styled.div`

    @media (min-width: 768px) {
        width: 275px;

    }

    @media (min-width: 1440px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    

    & > span  {
        display: block;

        font-family: Inter;
        font-size: 80px;
        font-style: normal;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -4px;

        color:  #3E85F3;

        @media (min-width: 768px) {
            font-size:104;
        }


    }

    & h2 {
        display: block;
        margin: 14px 0;

        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.25; /* 125% */
        text-transform: uppercase;


        color: #171820;

        @media (min-width: 768px) {
            font-size: 40px;
            line-height: 1.1; /* 110% */

           
        }
    }

    & h2 > span {
        padding: 0 18px;

        color: #3E85F3;
        background-color: #DCEBF7;
        border-radius: 44px;
    }

    & p {
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 1.28; /* 128.571% */

        color: rgba(17, 17, 17, 0.90);

        /* @media (min-width: 768px) {
            width: 275px;
        } */
    }
`


export const MainPageImgConteiner = styled.div`
    display: block;

    min-width: 335px;
    height: 457px;

    border-radius: 40px;
    overflow: hidden;

    @media (min-width: 768px) {
        width: 728px;
        /* width: 100%; */
        height: 700px;
    }

    @media (min-width: 1440px) {
        flex-basis: 604px;
        height: 700px;
    }

`
export const MainPageIMG = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`