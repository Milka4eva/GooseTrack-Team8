import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOwnerReview } from "redux/review/reviews-operations"
import { selectReviewOwn } from "redux/review/reviews-selector"
import { FeedbackForm } from "./Feedback"
import { Overlay } from "./FeedBack-modal.styled"




export const FeedBackModal = ({handleClose}) => {
    const [ownRating, setRating] = useState(null)
    const [ownComment, setComment] = useState('')
    const ownReview = useSelector(selectReviewOwn)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOwnerReview())
        setRating(ownReview.rating)
        setComment(ownReview.comment)
    }, [dispatch, ownReview.rating, ownReview.comment])
    
      useEffect(() => {
    const handleEscPress = e => {
      if (e.code === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [handleClose]);
    
    
  const onCloseOverlay = useCallback(
    e => {
      if (e.target === e.currentTarget) {
        handleClose()
      }
    },
    [handleClose]
)
    return (
        <Overlay onClick={onCloseOverlay}>
           <FeedbackForm ownComment={ownComment} ownRating={ownRating} handleClose={handleClose} />
        </Overlay>
    )
}