import SpriteSVG from "../../../images/sprite.svg"
import { ReviewCardHeader, ReviewsCardAvatar, ReviewsCardTitel, ReviewsCardStars, ReviewsCardText,RevievCardConteiner } from "./ReviewsCard.styled"

export const ReviewsCard = ({comment, owner, rating}) => {
      
    return <>

    <RevievCardConteiner>
           
        <ReviewCardHeader>
            <ReviewsCardAvatar>
                <img src={owner.avatarUrl} alt={owner.name} />
            </ReviewsCardAvatar>
                
            <div>
                <ReviewsCardTitel>{owner.name}</ReviewsCardTitel>
                <ReviewsCardStars>
                    {generationStars(rating)}
                </ReviewsCardStars>
            </div>

        </ReviewCardHeader>

        <ReviewsCardText>
            {comment}
        </ReviewsCardText>

    </RevievCardConteiner>      

    </>
}


function generationStars (star) {
    const startList = []

    for(let i = 0; i <= 5 - 1; i += 1) {

        if(star > i ){
            startList.push(
                <svg key={i}>
                    <use href={SpriteSVG + "#icon-starActive"}></use>
                </svg>
            )
        } else {
            startList.push(
                <svg key={i}>
                    <use href={SpriteSVG + "#icon-starDeactive"}></use>
                </svg>
            )
        }
    }

    
    return startList
}