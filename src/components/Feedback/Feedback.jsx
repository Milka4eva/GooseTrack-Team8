import { Formik} from 'formik';
import * as Yup from 'yup';

import {
  FeedbackFormContainer,
  Form,
  FormField,
  ErrorMessage,
  Title,
  TextareaField,
  RatingBtnOverlay,
  SaveFeedbackBtn,
  CancelFeedbackBtn,
  EditFeedbackBtn,
  ButtonStar,
  IconClose,
  ButtonDiv,
  Pensil,
  Trash,
} from './Feedback.styled';
import closeIcon from '../../images/sideBar.svg';
import icons from '../../images/sprite.svg'
import { useEffect, useState } from 'react';

import { createOwnerReview, deleteReviewOwn, updateOwnerReview } from 'redux/review/reviews-operations'; //here we also use 'getAllReviews' if needed//
import { useDispatch } from 'react-redux';




const FeedbackFormSchema = Yup.object().shape({
  rating: Yup.string().required('Required'),
  comment: Yup.string()
    .min(2, 'Your feedback is too short')
    .max(300, 'Your feedback is too long, please shorten it')
    .required('Required'),
});

export const FeedbackForm = ({ ownRating, ownComment, handleClose }) => {
   
   const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState(ownComment ||'')
     const [isEditOpen, setIsEditOpen] = useState(false);
 
 const dispatch = useDispatch();
    
//  Отримання всіх відгуків
//    ----------------------------
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllReviews());
//   }, [dispatch]);
//----------------------------------------------    

    useEffect(() => {      
    if (ownComment || ownRating) {
      setRating(ownRating);
      setComment(ownComment);
    }
  }, [ownRating, ownComment]);
	
    const stars = document.querySelectorAll("Stars");
    stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
     
    });
  });
    });
    
     function handleChange(event) {
    setComment(event.target.value);
    }
    
  const handleSubmit = e => {
    e.preventDefault();
      const form = e.target;
      const comment = form.elements.text.value
      if (ownRating || ownComment) {
          dispatch(updateOwnerReview({ rating, comment }))
            setIsEditOpen(false);
          handleClose()
          return
      }
      if (!ownRating || !ownComment) {
          dispatch(createOwnerReview({ rating, comment }))
          handleClose()
      }
    };
      const handleEditBtnClick = () => {
    setIsEditOpen(!isEditOpen);
  };

  const handleCancelClick = () => {
    setRating(ownRating);
    setComment(ownComment);
    setIsEditOpen(false);
    handleClose();
  };
 
    const handleDeleteReview = () => {
        dispatch(deleteReviewOwn())
        handleClose()
   
    }
  return (
    <Formik
      initialValues={{ rating: '', comment: '' }}
      validationSchema={FeedbackFormSchema}
      >
          {props =>(
               <FeedbackFormContainer>
            <IconClose onClick={handleClose} stroke="#111" >
              <use href={closeIcon + '#close-menu'} />
        </IconClose>
				  <Form onSubmit={handleSubmit}>
          
            <Title>Rating</Title>

                      <FormField>
                           <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
			<ButtonStar	
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
          >
             <use  href={icons + '#icon-Star-feedback'} />   
          </ButtonStar>
        );
      })}
    </div>          
            </FormField>
                      <FormField>
                          {(!rating || !comment )? (
                              <Title>Review</Title>
                          ) : (
                                  <>
                                        <Title>Review</Title>
                                   <ButtonDiv>

                          <Pensil onClick={handleEditBtnClick}>
                                   <use  href={icons + '#icon-pencil-01'} />   
                          </Pensil>
                   <Trash onClick={handleDeleteReview}>
                                   <use  href={icons + '#icon-trash-2'} />   
                          </Trash>
                      </ButtonDiv>
                                  </>
                          )}		 
              <TextareaField
                component="textarea"
                type="text"
                placeholder='Enter text'
                          name="text"
                              value={props.values.comment || comment}
                              onChange={handleChange}
                autoComplete="off"
              />
              <ErrorMessage name="text" component="p" />
            </FormField>
            <RatingBtnOverlay>
                          {(!ownRating || !ownComment) && (
                               <>
                    <SaveFeedbackBtn type="submit" >Save</SaveFeedbackBtn>
                  <CancelFeedbackBtn type="submit" onClick={handleCancelClick}>Cancel </CancelFeedbackBtn>       
              </>
                          )}
                          {isEditOpen && (
                              <>
                                  <EditFeedbackBtn type='submit'>Edit</EditFeedbackBtn>
                                  <CancelFeedbackBtn type='button' onClick={handleCancelClick}>Cancel</CancelFeedbackBtn>
                              </>
                 )}
                      </RatingBtnOverlay>                   
          </Form>
        </FeedbackFormContainer>
          )}
       
    </Formik>
  );
};