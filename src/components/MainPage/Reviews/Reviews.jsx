import { useEffect, useState } from "react"
import { useMediaQuery } from '@chakra-ui/react'


import { reviewsList } from "api/MainPage/reviews"
import { ReviewsCard } from "../ReviewsCard/ReviewsCard"
import {ReviewButtonConteiner, ReviewConteiner, ReviewImgConteiner, ReviewTitel} from "./Reviews.styled"
import SpriteSVG from "../../../images/sprite.svg"



export const Reviews = ({number}) => {

    const [phone, desktop] = useMediaQuery(['(max-width: 767px)', '(min-width: 1440px)'])


    const [data, setData] = useState([true, []])
    const [offset, setOffset] = useState(0)
    const [expansion, setExpansion] = useState(0)

    useEffect(() => {
        
        if(data[0]){
            (async ()=> {
                const reviewsData = await reviewsList(number)
                return setData([false, reviewsData])
            })();
            
        }
        
    },[data, number])

    useEffect(() => {
        if(phone) {
            setExpansion(375)
        } else if (desktop) {
            console.log(desktop)
            setExpansion(1184 + 24)
        } else {
            setExpansion(580)
        }


    }, [phone, desktop])

    const handlerLeft = () => {

        setOffset((currentOffset) => {
            const newOffcet = currentOffset + expansion
            
            if(newOffcet > 0) {
                const maxOffset = !desktop ? -(expansion* (number - 1)) : (-(expansion * (number % 2 === 0 ? number - 2 : number - 1)) / 2)
                return maxOffset
            } else {
                return newOffcet
            }
            
        })
    }

    const handlerRight = () => {

        setOffset((currentOffset) => {
            const newOffcet = currentOffset - expansion
            const maxOffset = !desktop ? -(expansion * (number - 1)) : (-(expansion * (number % 2 === 0 ? number - 2 : number - 1)) / 2)
            if (newOffcet < maxOffset) {
                return 0
            } else {
                return newOffcet
            }
        })
    }

    return <>
        <ReviewConteiner>
            <ReviewTitel>Reviews</ReviewTitel>

            <ReviewImgConteiner>
                <div style={{transform: `translateX(${offset}px)`}}>
                    {data[1].map(el => {
                        return <ReviewsCard key={el._id} comment={el.comment} owner={el.owner} rating={el.rating}/>
                    })}
                </div>
            </ReviewImgConteiner>
            
            <ReviewButtonConteiner>
                <svg onClick={handlerLeft}>
                    <use href={SpriteSVG + "#icon-reviewArrowL"}></use>
                </svg>
                <svg onClick={handlerRight}>
                    <use href={SpriteSVG + "#icon-reviewArrowR"}></use>
                </svg>

            </ReviewButtonConteiner>
        </ReviewConteiner>

        
    </>
}