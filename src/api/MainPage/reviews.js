import axios from "axios";

axios.defaults.baseURL = 'https://goose-back-end.onrender.com/';




export const reviewsList = async(number) => {
    const data = await getReviews()

    if(data.length > number) {

        return data.slice(0, number)
    } else {
        return data
    }
    
    
}



async function getReviews () {
    const {data} = await axios('/reviews')
    return data 
}