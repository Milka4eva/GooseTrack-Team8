import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOwnerReview } from "redux/review/reviews-operations"
import { selectReviewOwn } from "redux/review/reviews-selector"
import { FeedbackForm } from "./Feedback"


export const FeedBackModal = ({handleClose}) => {
    const [ownRating, setRating] = useState(null)
    const [ownComment, setComment] = useState('')
    const ownReview = useSelector(selectReviewOwn)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOwnerReview())
        setRating(ownReview.rating)
        setComment(ownReview.comment)
    }, [dispatch, ownReview.rating, ownReview.comment ])
    
    return (
        <>
            <FeedbackForm ownComment={ownComment} ownRating={ownRating} handleClose={handleClose}/>
        </>
    )
}