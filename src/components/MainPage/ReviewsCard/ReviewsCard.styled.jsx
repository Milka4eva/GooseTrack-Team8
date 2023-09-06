import styled from "styled-components";

export const RevievCardConteiner = styled.div`
    display: block;
    
    min-width: 100%;
    max-width: 100%;
    height: 100%;

    padding: 24px 20px 24px 24px;

    border-radius: 8px;
    border: 1px solid rgba(17, 17, 17, 0.10);

    @media (min-width: 768px) {
        padding: 32px;
    }

    @media (min-width: 1440px) {
        min-width: 580px;
        max-width: 580px;
    }
`

export const ReviewCardHeader = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 18px;

    height: 50px;
`

export const ReviewsCardAvatar = styled.div`
    display: block;
    width: 50px;
    height: 50px;

    border-radius: 50px;
    overflow: hidden;

    & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`



export const ReviewsCardTitel = styled.h2`
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 1; /* 100% */
    
    color: #343434;
`

export const ReviewsCardStars = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;

    margin-top: 13px;

    height: 14px;

    box-sizing: border-box;

    & svg {
        display: block;
        width: 14px;
        object-fit: cover;
    }
`

export const ReviewsCardText = styled.p`

    display: block;
    margin-top: 30px;

    height: 72px;
    overflow: hidden;

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1; /* 128.571% */

    color: rgba(17, 17, 17, 0.70);

    @media (min-width: 768px) {
        margin-top: 24px;
        margin-left: 68px;

        height: 70px;
    }
`